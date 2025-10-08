'use strict';

class Workout {
  date = new Date();
  // For real world - always use a library to create unique IDs
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coors, distance, duration, cadence) {
    super(coors, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coors, distance, duration, elevationGain) {
    super(coors, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

/////////////////////////  APPLICATION ARCHITECHTURE ////////////////////////////////////////////////////////////

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  // private instance properties
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPostition();
    this._getLocalStorage();
    form.addEventListener('submit', this._newWorkout.bind(this));

    // Toggle hidden data for running vs cycling
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPostition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();

    // handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    // check to see if input is a valid, infinate number
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    // get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if running - create running obj
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('inputs have to be positive numbers');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if cycling - create cycling obj
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('inputs have to be positive numbers');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // add new obj to workout array
    this.#workouts.push(workout);

    // render workout on map as marker
    this._renderWorkoutMarker(workout);

    // render workout on a list
    this._renderWorkout(workout);

    // hide form and clear input fields
    this._hideForm();

    this._setLocalStorage();

    // Clear Input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? 'ðŸƒâ€â™‚ï¸' : 'ðŸš´â€â™€ï¸'} ${
          workout.description
        }`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
                <li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
               <h2 class="workout__title">${workout.description}</h2>
               <div class="workout__details">
                   <span class="workout__icon">${
                     workout.type === 'running' ? 'ðŸƒâ€â™‚ï¸' : 'ðŸš´â€â™€ï¸'
                   }</span>
                   <span class="workout__value">${workout.distance}</span>
                   <span class="workout__unit">km</span>
               </div>
               <div class="workout__details">
                   <span class="workout__icon">â±</span>
                   <span class="workout__value">${workout.duration}</span>
                   <span class="workout__unit">min</span>
               </div>
                   `;

    if (workout.type === 'running') {
      html += `<div class="workout__details">
                       <span class="workout__icon">âš¡ï¸</span>
                       <span class="workout__value">${workout.pace.toFixed(
                         1
                       )}</span>
                       <span class="workout__unit">min/km</span>
                     </div>
                     <div class="workout__details">
                       <span class="workout__icon">ðŸ¦¶ðŸ¼</span>
                       <span class="workout__value">${workout.cadence}</span>
                       <span class="workout__unit">spm</span>
                     </div>
                   </li>`;
    }

    if (workout.type === 'cycling') {
      html += ` <div class="workout__details">
                       <span class="workout__icon">âš¡ï¸</span>
                       <span class="workout__value">${workout.speed.toFixed(
                         1
                       )}</span>
                       <span class="workout__unit">km/h</span>
                     </div>
                     <div class="workout__details">
                       <span class="workout__icon">â›°</span>
                       <span class="workout__value">${
                         workout.elevationGain
                       }</span>
                       <span class="workout__unit">m</span>
                     </div>
                   </li>`;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  //    set all workouts to local storage
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
    //    can be used in the console - app.reset();
  }
}

const app = new App();
