import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCopy, FaCheck } from 'react-icons/fa';

// Copie dans le presse-papiers (avec repli pour les vieux navigateurs / WebView).
const copyText = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            return ok;
        } catch {
            return false;
        }
    }
};

const CopyRow = ({ label, value, copyLabel, copiedLabel }) => {
    const [done, setDone] = useState(false);
    const onCopy = async () => {
        if (await copyText(value)) {
            setDone(true);
            toast.success(copiedLabel);
            setTimeout(() => setDone(false), 2000);
        }
    };
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
            <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{label}</div>
            <div className="flex items-stretch gap-2">
                <div dir="ltr" className="flex-1 min-w-0 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-3 font-mono text-sm sm:text-base text-gray-900 dark:text-white break-all select-all text-center">
                    {value}
                </div>
                <button
                    type="button"
                    onClick={onCopy}
                    aria-label={`${copyLabel}: ${label}`}
                    className="shrink-0 min-w-[96px] min-h-[48px] px-4 rounded-lg bg-[var(--brand-navy)] hover:bg-[var(--brand-navy-dark)] text-white font-bold flex items-center justify-center gap-2 transition active:scale-95"
                >
                    {done ? <FaCheck /> : <FaCopy />}
                    <span>{done ? copiedLabel : copyLabel}</span>
                </button>
            </div>
        </div>
    );
};

// Carte de paiement : titre + lignes copiables + code QR (généré à la demande, hors bundle principal).
const PayCard = ({ icon, title, rows, qrValue, qrCaption, copyLabel, copiedLabel }) => {
    const [qr, setQr] = useState('');

    useEffect(() => {
        let alive = true;
        if (!qrValue) return undefined;
        import('qrcode')
            .then((m) => (m.default || m).toDataURL(qrValue, { margin: 1, width: 240, errorCorrectionLevel: 'M' }))
            .then((url) => { if (alive) setQr(url); })
            .catch(() => { /* le QR est un bonus : la carte reste utilisable sans lui */ });
        return () => { alive = false; };
    }, [qrValue]);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border-t-4 border-[var(--brand-navy)] transition-colors duration-300">
            <div className="text-[var(--brand-navy)] dark:text-[var(--brand-gold)] text-4xl mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-5 text-gray-800 dark:text-white">{title}</h3>
            <div className="space-y-4">
                {rows.map((r) => (
                    <CopyRow key={r.label} {...r} copyLabel={copyLabel} copiedLabel={copiedLabel} />
                ))}
            </div>
            {qr && (
                <div className="mt-6 flex flex-col items-center gap-2">
                    <img src={qr} width="180" height="180" alt={qrCaption} className="rounded-lg bg-white p-2 border border-gray-200" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 text-center">{qrCaption}</span>
                </div>
            )}
        </div>
    );
};

export default PayCard;
