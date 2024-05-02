document.addEventListener("DOMContentLoaded", function() {
    const rows = 6; // Número de filas
    const seatsPerRow = 10; // Número de asientos por fila
    const seating = document.querySelector('.seating');
    const reserveBtn = document.getElementById('reserve-btn');
    const moviesContainer = document.querySelector('.movies-container');

    // Objeto para almacenar los asientos reservados por película
    let reservedSeatsByMovie = {};

    // Función para generar el código HTML de los asientos
    function generateSeatsHTML(rows, seatsPerRow, reservedSeats) {
        let html = '';
        for (let row = 1; row <= rows; row++) {
            for (let seat = 1; seat <= seatsPerRow; seat++) {
                const seatKey = `${row}-${seat}`;
                const isReserved = reservedSeats.includes(seatKey);
                const seatClass = isReserved ? 'seat reserved' : 'seat';
                html += `<div class="${seatClass} row-${row}" data-row="${row}" data-seat="${seat}">
                            <span class="seat-info">${row}${String.fromCharCode(64 + seat)}</span>
                        </div>`;
            }
        }
        return html;
    }

    // Función para manejar la selección de una película
    function selectMovie(movieElement, movie) {
        const reservedSeats = reservedSeatsByMovie[movie] || [];
        seating.innerHTML = generateSeatsHTML(rows, seatsPerRow, reservedSeats);
        // Remover la clase 'selected' de todos los botones de película
        document.querySelectorAll('.movie').forEach(element => {
            element.classList.remove('selected');
        });
        // Agregar la clase 'selected' al botón de la película seleccionada
        movieElement.classList.add('selected');
    }

    // Función para manejar la selección de un asiento
    function toggleSeatSelection(seat) {
        const isReserved = seat.classList.contains('reserved');
        if (!isReserved) {
            seat.classList.toggle('selected');
        }
    }

    // Función para mostrar el mensaje de reserva
    function showReservationMessage() {
        const selectedSeats = document.querySelectorAll('.selected');
        if (selectedSeats.length > 0) {
            alert('Los asientos han sido reservados correctamente.');
            selectedSeats.forEach(seat => {
                const row = seat.getAttribute('data-row');
                const seatNum = seat.getAttribute('data-seat');
                const seatKey = `${row}-${seatNum}`;
                const selectedMovie = document.querySelector('.movie.selected').textContent;
                reservedSeatsByMovie[selectedMovie] = reservedSeatsByMovie[selectedMovie] || [];
                reservedSeatsByMovie[selectedMovie].push(seatKey);
                seat.classList.add('reserved');
            });
        }
    }

    // Agregar eventos de clic a los asientos
    function addSeatClickEvents() {
        const seats = document.querySelectorAll('.seat');
        seats.forEach(seat => {
            seat.addEventListener('click', function() {
                toggleSeatSelection(this);
            });
        });
    }

    // Agregar eventos de clic al botón de reserva
    reserveBtn.addEventListener('click', function() {
        showReservationMessage();
    });

    // Agregar películas al contenedor de películas
    const movies = ['Titanic', 'El Padrino', 'Forrest Gump']; // Ejemplo de películas
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.textContent = movie;
        movieElement.classList.add('movie');
        moviesContainer.appendChild(movieElement);
        movieElement.addEventListener('click', function() {
            selectMovie(movieElement, movie);
            addSeatClickEvents(); // Reagregar eventos de clic a los asientos después de seleccionar una película
        });
    });

    // Seleccionar la primera película por defecto al cargar la página
    selectMovie(document.querySelector('.movie'), movies[0]);
});