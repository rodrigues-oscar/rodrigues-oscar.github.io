/**
 * Certifications Page - Card Toggle Functionality
 * Handles expanding/collapsing certification cards with accordion behavior
 */
function toggleCertCard(header) {
  const card = header.closest('.project-card');
  const isExpanded = card.getAttribute('data-expanded') === 'true';

  // Close all other cards (accordion behavior)
  document.querySelectorAll('.certifications-content .project-card').forEach(otherCard => {
    if (otherCard !== card) {
      otherCard.setAttribute('data-expanded', 'false');
    }
  });

  // Toggle current card
  card.setAttribute('data-expanded', !isExpanded);
}
