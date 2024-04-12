document.addEventListener('DOMContentLoaded', function () {
    // Sample data for all charts (replace this with actual data)
    const data = {
      debt: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Debt',
          data: [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 0, 0],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      // Add data for other categories
    };

    // Initialize all charts
    Object.keys(data).forEach(category => {
      const ctx = document.getElementById(`${category}-chart`).getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: data[category],
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month'
              }
            },
            y: {
              title: {
                display: true,
                text: category === 'current-growth' ? 'Growth (%)' : 'Amount ($)'
              }
            }
          }
        }
      });
    });

    // Sample summary data (replace this with actual data)
    const summaryData = {
      'current-debt': 1500,
      'current-growth': 15,
      'net-profit': 2000,
      'net-loss': 500,
      'net-worth': 30000
    };

    // Populate summary section with data
    Object.keys(summaryData).forEach(category => {
      document.getElementById(category).textContent = summaryData[category];
    });

    // Sample total money data (replace this with actual data)
    const totalMoney = 50000;

    // Populate total money block with data
    document.getElementById('total-money').textContent = totalMoney;

    // Sample username (replace this with actual user name)
    const username = "User";

    // Update greeting message
    document.getElementById('username').textContent = username;
});
