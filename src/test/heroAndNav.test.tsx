import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { DualEngineSection } from '../components/DualEngineSection';

describe('Task 4: Navigation, Hero & Dual Engine Strategy', () => {
  it('renders Navbar with CIP code, language toggle, and CV link', () => {
    const toggle = vi.fn();
    render(<Navbar lang="es" onToggleLang={toggle} />);
    expect(screen.getByText(/CIP N\.º 264611/i)).toBeInTheDocument();
    const langBtn = screen.getByRole('button', { name: /ES\s*\/\s*EN/i });
    fireEvent.click(langBtn);
    expect(toggle).toHaveBeenCalledTimes(1);
    const cvLink = screen.getByRole('link', { name: /CV PDF/i });
    expect(cvLink).toHaveAttribute('href', expect.stringContaining('CV-Ejecutivo-Alejandro-Carrasco.pdf'));
  });

  it('renders HeroSection in ES and EN with verified KPIs, portrait, and CTAs', () => {
    const { rerender } = render(<HeroSection lang="es" />);
    expect(screen.getByRole('heading', { name: /Julio Alejandro Carrasco Contreras/i })).toBeInTheDocument();
    expect(screen.getByText('8.22+')).toBeInTheDocument();
    expect(screen.getByText('17')).toBeInTheDocument();
    expect(screen.getByText('2,511+')).toBeInTheDocument();
    expect(screen.getByAltText(/Julio Alejandro Carrasco Contreras/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Descargar CV Ejecutivo/i })).toBeInTheDocument();

    rerender(<HeroSection lang="en" />);
    expect(screen.getByRole('link', { name: /Download Executive CV/i })).toBeInTheDocument();
  });

  it('renders DualEngineSection with both pillars, 7 competencies, and INTJ-Te profile', () => {
    render(<DualEngineSection lang="es" />);
    expect(screen.getByText(/Ingeniería HSE, Auditoría y Gobierno Normativo/i)).toBeInTheDocument();
    expect(screen.getByText(/Arquitectura Full-Stack, Android, Desktop e IA/i)).toBeInTheDocument();
    expect(screen.getByText(/INTJ-Te/i)).toBeInTheDocument();
    expect(screen.getByText(/Metodologías ICAM, SCAT, BowTie/i)).toBeInTheDocument();
  });
});
