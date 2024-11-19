
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const habitsCtx = document.getElementById('habitsChart').getContext('2d');
    new Chart(habitsCtx, {
        type: 'bar',
        data: {
            labels: ['Gas', 'Food', 'Shopping'],
            datasets: [{
                label: 'Spending',
                data: [150, 300, 200],
                backgroundColor: ['#7A0019', '#B71C1C', '#D32F2F']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: { display: true },
                y: { display: true, beginAtZero: true }
            }
        }
    });

    const goalsCtx = document.getElementById('goalsChart').getContext('2d');
    new Chart(goalsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Saved', 'Remaining'],
            datasets: [{
                data: [67, 33],
                backgroundColor: ['#B71C1C', '#E0E0E0']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
        }
    });

    const recapCtx = document.getElementById('recapChart').getContext('2d');
    new Chart(recapCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Spending',
                data: [20, 50, 30, 80, 60, 40, 70],
                borderColor: '#B71C1C',
                fill: true,
                backgroundColor: 'rgba(183, 28, 28, 0.2)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: { display: true },
                y: { display: true, beginAtZero: true }
            }
        }
    });
});
