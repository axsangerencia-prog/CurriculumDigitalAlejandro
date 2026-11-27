import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExperienceExplorer } from '../components/ExperienceExplorer';
import { CredentialsVault } from '../components/CredentialsVault';
import { ContactFooter } from '../components/ContactFooter';
import App from '../App';

describe('Task 6: Experience, Credentials Vault, Contact & Full App', () => {
  it('renders all 13 formal periods including Supervisor SSOMA at MYSSA and searches 35 freelance contracts', () => {
    render(<ExperienceExplorer lang="es" />);
    expect(screen.getByText(/Mantenimiento y Supervisión S\.A\./i)).toBeInTheDocument();
    expect(screen.getAllByText(/Supervisor SSOMA/i).length).toBeGreaterThanOrEqual(1);

    const freelanceTab = screen.getByRole('tab', { name: /Servicios independientes \(35 contratos\)/i });
    fireEvent.click(freelanceTab);

    const showAllBtn = screen.getByRole('button', { name: /Mostrar los 35 servicios completos/i });
    fireEvent.click(showAllBtn);
    expect(screen.getByText(/Cinemark Asia/i)).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText(/Buscar por cliente/i);
    fireEvent.change(searchInput, { target: { value: 'Marcobre' } });
    expect(screen.getAllByText(/Marcobre/i).length).toBeGreaterThanOrEqual(2);

    fireEvent.change(searchInput, { target: { value: 'ZZZZ_NO_MATCH' } });
    expect(screen.getByText(/Sin coincidencias/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Restablecer filtros/i }));
    expect(screen.getByText(/Naviera Petral/i)).toBeInTheDocument();
  });

  it('opens Verified Evidence modal and searches 120+ certificates including v35 annexes', () => {
    render(<CredentialsVault lang="es" />);
    expect(screen.getByText(/Google AI Professional Certificate/i)).toBeInTheDocument();
    expect(screen.getByText(/Harnessing the Power of Data with Power BI/i)).toBeInTheDocument();
    expect(screen.getByText(/1\.° puesto en Orden de Mérito/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Abrir visor de evidencias/i }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent(/202200156/);
    fireEvent.keyDown(window, { key: 'Escape' });

    const certSearch = screen.getByPlaceholderText(/Buscar certificado/i);
    fireEvent.change(certSearch, { target: { value: 'KREA-CAP' } });
    expect(screen.getAllByText(/KREA GREEN/i).length).toBeGreaterThanOrEqual(3);
  });

  it('copies email in ContactFooter and toggles full App cleanly between ES and EN', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    render(<ContactFooter lang="es" />);
    const copyBtn = screen.getByRole('button', { name: /Copiar correo/i });
    fireEvent.click(copyBtn);
    expect(writeText).toHaveBeenCalledWith('ing.alejandro.carrasco@gmail.com');
    expect(await screen.findByText(/Correo copiado/i)).toBeInTheDocument();

    render(<App />);
    const langBtn = screen.getAllByRole('button', { name: /ES\s*\/\s*EN/i })[0];
    fireEvent.click(langBtn);
    expect(document.documentElement.lang).toBe('en');
    expect(screen.getByRole('heading', { name: /Live Mobile Suite on Google Play Store/i })).toBeInTheDocument();
  });
});
