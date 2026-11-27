import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SafeImage } from '../components/ui/SafeImage';
import { LightboxModal } from '../components/ui/LightboxModal';
import { CredentialsVault } from '../components/CredentialsVault';
import { PlayStoreShowcase } from '../components/PlayStoreShowcase';
import { App } from '../App';
import { CREDLY_CREDENTIALS, EDUCATION, OFFICIAL_ACCREDITATIONS, CERTIFICATES } from '../data/credentials';

describe('Code Review Fixes Verification', () => {
  it('resets SafeImage error state when src changes and renders compact monogram on compact mode', () => {
    const { rerender, container } = render(
      <SafeImage src="https://broken.example/a.png" alt="App A" fallbackLabel="Axsan Code" compact />,
    );
    const img = screen.getByRole('img', { name: 'App A' });
    fireEvent.error(img);
    expect(container.textContent).toContain('AC');

    rerender(
      <SafeImage src="https://valid.example/b.png" alt="App B" fallbackLabel="Axsan Pro" compact />,
    );
    expect(screen.getByRole('img', { name: 'App B' }).tagName).toBe('IMG');
  });

  it('restores focus to original opener after navigating multiple slides in LightboxModal and traps Tab', () => {
    const onClose = vi.fn();
    const onChangeIndex = vi.fn();
    const opener = document.createElement('button');
    opener.textContent = 'Open Lightbox';
    document.body.appendChild(opener);
    opener.focus();

    const slides = [
      { url: 'https://example.com/1.png', caption: 'Slide 1' },
      { url: 'https://example.com/2.png', caption: 'Slide 2' },
    ];

    const { rerender } = render(
      <LightboxModal
        isOpen={true}
        slides={slides}
        activeIndex={0}
        title="Test Lightbox"
        lang="es"
        onClose={onClose}
        onChangeIndex={onChangeIndex}
      />,
    );

    const nextBtn = screen.getByRole('button', { name: /Siguiente captura/i });
    nextBtn.focus();
    expect(document.activeElement).toBe(nextBtn);

    rerender(
      <LightboxModal
        isOpen={true}
        slides={slides}
        activeIndex={1}
        title="Test Lightbox"
        lang="es"
        onClose={() => onClose()}
        onChangeIndex={(i) => onChangeIndex(i)}
      />,
    );

    // Focus must stay on nextBtn instead of jumping back to close button on slide change
    expect(document.activeElement).toBe(nextBtn);

    // Close modal -> focus must return to original opener, not nextBtn
    rerender(
      <LightboxModal
        isOpen={false}
        slides={slides}
        activeIndex={1}
        title="Test Lightbox"
        lang="es"
        onClose={onClose}
        onChangeIndex={onChangeIndex}
      />,
    );
    expect(document.activeElement).toBe(opener);
    opener.remove();
  });

  it('opens Lightbox when clicking directly on the Play Store screenshot image', () => {
    render(<PlayStoreShowcase lang="es" />);
    const shotImg = screen.getByAltText(/Safety Officer 3D: Hazard Runner —/i);
    fireEvent.click(shotImg);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('uses a live MTPE verification URL (never broken sigdoc-ext 404) and localizes evidence modal to EN', () => {
    const serialized = JSON.stringify({ OFFICIAL_ACCREDITATIONS, EDUCATION, CREDLY_CREDENTIALS, CERTIFICATES });
    expect(serialized).not.toContain('sigdoc-ext');

    render(<CredentialsVault lang="en" />);
    fireEvent.click(screen.getByRole('button', { name: /Open official credentials/i }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).not.toHaveTextContent(/Colegiado|Autos Directorales|Programa Avanzado|Certificados INPA/);
    expect(dialog).toHaveTextContent(/Admitted Aug 2021|Directorate Decrees|Advanced Program/);
  });

  it('eliminates Spanish leakage in EN mode across App', () => {
    window.localStorage.setItem('alejandro_cv_lang', 'en');
    render(<App />);
    expect(document.body.textContent).not.toContain('Sistemas Empresariales a Medida');
    expect(document.body.textContent).not.toContain('Ecosistema MYSSA');
    expect(document.body.textContent).not.toContain('CIP N.º 264611');
    expect(document.body.textContent).toContain('CIP No. 264611');
    expect(document.body.textContent).toContain('Custom Enterprise Systems');
  });
});
