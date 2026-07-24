# Evidenze scientifiche

Questa documentazione spiega come gestire la sezione pubblica "Evidenze scientifiche".

## Dove sono salvati i settori

I settori sono definiti in:

`src/data/scientificEvidence.ts`

La costante da modificare e:

`evidenceSectors`

Ogni settore contiene:

- `slug`: parte dell'URL, per esempio `industriale`;
- `title`: nome mostrato nella pagina;
- `description`: testo della card nella pagina generale;
- `intro`: testo introduttivo della pagina settore;
- `icon`: icona Lucide usata nella card e nella pagina;
- `keywords`: parole chiave usate nei metadati.

## Dove sono salvati gli articoli

Gli articoli sono salvati nello stesso file:

`src/data/scientificEvidence.ts`

La costante da compilare e:

`scientificEvidenceArticles`

Al momento e vuota per evitare dati bibliografici inventati.

## Come aggiungere un nuovo articolo

Aggiungi un nuovo oggetto dentro `scientificEvidenceArticles`.

Campi obbligatori:

- `id`
- `slug`
- `title`
- `authors`
- `year`
- `journalOrSource`
- `sectors`
- `analyzedComponents`
- `studyType`
- `summary`
- `relevance`
- `limitations`
- `language`
- `keywords`
- `pertinenceLevel`
- `featured`
- `insertedAt`
- `updatedAt`

Campi facoltativi:

- `doi`
- `sourceUrl`
- `pdfUrl`
- `pdfPublicationAllowed`
- `futureSubsector`

## Come associare un articolo a uno o piu settori

Usa il campo `sectors`, che accetta un array.

Esempio:

```ts
sectors: ["industriale", "pitture-rivestimenti"]
```

In questo modo lo stesso articolo comparira in entrambe le pagine senza duplicare i dati.

## Come aggiungere un nuovo settore

1. Aggiungi il nuovo slug al tipo `EvidenceSectorSlug`.
2. Aggiungi una nuova voce in `evidenceSectors`.
3. Verifica che l'URL generato sia corretto.
4. Aggiorna eventuali link di navigazione solo se il nuovo settore deve diventare voce principale.

Le pagine settore sono generate automaticamente da:

`src/app/evidenze-scientifiche/[sector]/page.tsx`

## Come creare un nuovo percorso `/qr/`

I QR sono gestiti nello stesso file dati:

`src/data/scientificEvidence.ts`

Aggiungi una voce in `qrRedirects`.

Esempio:

```ts
{
  slug: "detergenza-rame-argento",
  destination: "/evidenze-scientifiche/industriale",
  description: "QR stabile per materiali relativi alla detergenza nel grande settore Industriale."
}
```

Il percorso pubblico sara:

`/qr/detergenza-rame-argento`

## Come modificare la destinazione di un QR esistente

Modifica solo il campo `destination` della voce gia esistente in `qrRedirects`.

Non cambiare lo `slug` se il QR e gia stato stampato su etichette o materiali commerciali.

## Note sui PDF

Compila `pdfUrl` solo quando il PDF puo essere pubblicato o collegato legalmente.

Imposta `pdfPublicationAllowed: true` solo se il documento e open access, aziendale, autorizzato o legalmente condivisibile.

## Dove sono le pagine

- Pagina generale: `src/app/evidenze-scientifiche/page.tsx`
- Pagine settore: `src/app/evidenze-scientifiche/[sector]/page.tsx`
- Redirect QR: `src/app/qr/[slug]/page.tsx`
- Sitemap: `src/app/sitemap.ts`
