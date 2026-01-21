document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });

  const ctx = document.getElementById('barChart').getContext('2d');

  const dataValues = [30, 70, 110, 150, 190, 230];
  const barCount = dataValues.length;
  const totalDuration = 9000; // total animation duration in ms
  const perBarDuration = totalDuration / barCount;

  // Custom plugin to animate solid turquoise fill from bottom to top sequentially
  const fillAnimationPlugin = {
    id: 'fillAnimationPlugin',
    afterDatasetDraw(chart, args, options) {
      const {ctx, chartArea: {top, bottom}} = chart;
      const meta = chart.getDatasetMeta(0);
      const currentTime = performance.now();
      if (!chart._fillAnimationStart) {
        chart._fillAnimationStart = currentTime;
      }
      const elapsed = currentTime - chart._fillAnimationStart;

      meta.data.forEach((bar, index) => {
        const barStart = index * perBarDuration;
        const barX = bar.x - bar.width / 2;
        const barY = bar.y;
        const barHeight = bottom - barY;

        // Draw full gray bar base
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(barX, barY, bar.width, barHeight);

        if (elapsed > barStart) {
          const fillProgress = Math.min((elapsed - barStart) / perBarDuration, 1);
          const fillHeight = barHeight * fillProgress;

          // Draw solid turquoise fill from bottom to top
          ctx.fillStyle = 'rgba(64, 224, 208, 1)';
          ctx.fillRect(barX, bottom - fillHeight, bar.width, fillHeight);
        }
      });
    }
  };

  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', '', ''],
      datasets: [{
        label: '',
        data: dataValues,
        backgroundColor: 'rgba(0,0,0,0)', // transparent, drawing handled by plugin
        borderRadius: 10,
        barPercentage: 0.9,
        categoryPercentage: 1.0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: totalDuration,
        easing: 'linear',
      },
      scales: {
        x: {
          display: false,
          grid: {
            display: false,
            drawBorder: false,
          }
        },
        y: {
          display: false,
          grid: {
            display: true,
            color: 'rgba(255, 255, 255, 0.1)',
            drawBorder: false,
          },
          beginAtZero: true,
          max: 240,
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      }
    },
    plugins: [fillAnimationPlugin]
  });

  // Scroll behavior for navbar hide/show
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
      // At top of page, show navbar
      navbar.classList.remove('navbar-hidden');
    } else {
      // Scrolled down, hide navbar
      navbar.classList.add('navbar-hidden');
    }
  });

  // New function for proyectos section interaction
  function initProyectosInteraction() {
    const img11 = document.getElementById('img11');
    const proyectosHoverContainer = document.querySelector('.proyectos-hover-container');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = modal.querySelector('.close-btn');

    if (!img11 || !proyectosHoverContainer || !modal || !modalTitle || !modalDescription || !closeBtn) {
      return; // Required elements not found, do nothing
    }

    // Show proyectos images on hover of img11 and hide img11
    img11.addEventListener('mouseenter', () => {
      proyectosHoverContainer.classList.add('active');
      img11.style.display = 'none';
    });

    img11.addEventListener('mouseleave', () => {
      // Use timeout to allow hover on proyectosHoverContainer
      setTimeout(() => {
        if (!proyectosHoverContainer.matches(':hover') && !img11.matches(':hover')) {
          proyectosHoverContainer.classList.remove('active');
          img11.style.display = 'block';
        }
      }, 200);
    });

    proyectosHoverContainer.addEventListener('mouseleave', () => {
      proyectosHoverContainer.classList.remove('active');
      img11.style.display = 'block';
    });

    proyectosHoverContainer.addEventListener('mouseenter', () => {
      proyectosHoverContainer.classList.add('active');
      img11.style.display = 'none';
    });

    // Add click event to all ver-mas buttons
    const verMasButtons = proyectosHoverContainer.querySelectorAll('.ver-mas-btn');
    verMasButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const proyectoItem = e.target.closest('.proyecto-hover-item');
        const title = proyectoItem.getAttribute('data-title');
        const description = proyectoItem.getAttribute('data-description');

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'flex';
      });
    });

    // Close modal on close button click
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal on clicking outside modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Call the new function without changing existing code
  initProyectosInteraction();
});

// EmailJS form submission integration for Cotizacion.html

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
      nombre: form.querySelector('input[placeholder="Nombre completo"]').value,
      email: form.querySelector('input[placeholder="Correo electrónico"]').value,
      empresa: form.querySelector('input[placeholder="Empresa o proyecto (opcional)"]').value,
      automatizar: form.querySelector('textarea[placeholder="¿Qué deseas automatizar?"]').value,
      herramientas: form.querySelector('input[placeholder="Herramientas que usas actualmente (opcional)"]').value,
      presupuesto: form.querySelector('input[placeholder="Presupuesto estimado (opcional)"]').value,
    };

    // Prepare EmailJS parameters
    const templateParams = {
      name: formData.nombre,
      email: formData.email,
      empresa: formData.empresa,
      automatizar: formData.automatizar,
      herramientas: formData.herramientas,
      presupuesto: formData.presupuesto,
    };

    // Send email via EmailJS
    emailjs.send("service_z53buww", "template_tskdoks", templateParams)
      .then(function(response) {
        alert("Solicitud enviada correctamente. ¡Gracias!");
        form.reset();
      }, function(error) {
        alert("Error al enviar la solicitud. Por favor, inténtalo de nuevo.");
        console.error("EmailJS error:", error);
      });
  });
});
