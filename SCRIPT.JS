{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
  const flatCards = document.querySelectorAll('.flat-card');\
  const modal = document.getElementById('modal');\
  const modalImage = document.getElementById('modal-image');\
  const modalTitle = document.getElementById('modal-title');\
  const modalDescription = document.getElementById('modal-description');\
  const closeBtn = document.getElementById('close');\
\
  flatCards.forEach(card => \{\
    card.addEventListener('click', () => \{\
      modalImage.src = card.dataset.image;\
      modalImage.alt = card.dataset.title;\
      modalTitle.textContent = card.dataset.title;\
      modalDescription.textContent = card.dataset.description;\
      modal.style.display = 'block';\
    \});\
  \});\
\
  closeBtn.addEventListener('click', () => \{\
    modal.style.display = 'none';\
  \});\
\
  window.addEventListener('click', (e) => \{\
    if (e.target === modal) \{\
      modal.style.display = 'none';\
    \}\
  \});\
\});\
}