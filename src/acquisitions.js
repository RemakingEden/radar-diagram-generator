import Chart from 'chart.js/auto'
import Config from '../configuration.json'

(async function () {
    const type = 'radar'
    const data = {
        labels: [
            'Testing Knowledge',
            'Test Process',
            'Test Environments',
            'Test Tools',
            'Test Automation',
            'Test Design',
            'Testing Types',
            'Estimation & Planning',
            'Test Coverage',
            'Reporting',
            'Collaboration',
            'Defect Management'
        ],
        datasets: Config,
    };
    const options = {
        animation: false,
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: false
            }
        },
        scale: {
            suggestedMin: 0,
            suggestedMax: 5,
            ticks: {
                stepSize: 1,
                font: {
                    weight: 'bolder',
                    size: 12
                }
            },
            pointLabels: {
                font: {
                weight: 'bolder'
            }}
        }
    }

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: type,
            options: options,
            data: data
        }
    );
})();