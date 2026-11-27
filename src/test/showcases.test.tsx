import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PlayStoreShowcase } from '../components/PlayStoreShowcase';
import { EcosystemShowcase } from '../components/EcosystemShowcase';

describe('Task 5: Play Store Carousel & 13-Platform MYSSA Showcase', () => {
  it('switches among all 4 Play Store apps and navigates the screenshot carousel', () => {
    render(<PlayStoreShowcase lang="es" />);
    expect(screen.getByRole('heading', { name: /Safety Officer 3D: Hazard Runner/i })).toBeInTheDocument();

    const nextBtn = screen.getByRole('button', { name: /Siguiente captura/i });
    fireEvent.click(nextBtn);
    expect(screen.getByText(/Herramientas de campo: IPERC, ATS y PETAR/i)).toBeInTheDocument();

    const axsanCodeTab = screen.getByRole('tab', { name: /Axsan Code/i });
    fireEvent.click(axsanCodeTab);
    expect(screen.getByRole('heading', { name: /Axsan Code/i })).toBeInTheDocument();

    const axsanProTab = screen.getByRole('tab', { name: /Axsan Pro/i });
    fireEvent.click(axsanProTab);
    expect(screen.getByRole('heading', { name: /Axsan Pro: Ingeniería y HSE/i })).toBeInTheDocument();

    const normasTab = screen.getByRole('tab', { name: /Alerta Legal/i });
    fireEvent.click(normasTab);
    expect(screen.getByRole('heading', { name: /Axsan Alerta Legal HSE Perú/i })).toBeInTheDocument();

    // Complementary & Public GitHub repos
    expect(screen.getByText(/Biblioteca HSE Alejandría/i)).toBeInTheDocument();
    expect(screen.getByText(/Safe Fall Calculator/i)).toBeInTheDocument();
    expect(screen.getByText('active-pause-desktop')).toBeInTheDocument();
  });

  it('opens and closes LightboxModal on Escape', () => {
    render(<PlayStoreShowcase lang="es" />);
    const zoomBtn = screen.getByRole('button', { name: /Ampliar captura/i });
    fireEvent.click(zoomBtn);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('filters all 13 MYSSA platforms and toggles between Carousel and Full Grid views', () => {
    render(<EcosystemShowcase lang="es" />);
    const gridBtn = screen.getByRole('button', { name: /Ver catálogo completo \(13\)/i });
    fireEvent.click(gridBtn);
    expect(screen.getByText('Certificados - M&S')).toBeInTheDocument();
    expect(screen.getByText(/EPP’s - M&S/i)).toBeInTheDocument();
    expect(screen.getByText(/Incluye software nativo Windows 10 & 11/i)).toBeInTheDocument();

    const opsFilter = screen.getByRole('button', { name: /Operaciones y Alto Riesgo/i });
    fireEvent.click(opsFilter);
    expect(screen.getByText(/IPERC Continuo Digital/i)).toBeInTheDocument();
    expect(screen.queryByText('Certificados - M&S')).not.toBeInTheDocument();
  });
});
