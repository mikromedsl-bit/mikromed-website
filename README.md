# Sito Mikromed Europa S.L.

Sito corporate statico in italiano per Mikromed Europa S.L., realizzato con Next.js, React, TypeScript e Tailwind CSS.

## Avvio locale

```bash
pnpm install
pnpm dev
```

Poi apri `http://localhost:3000`.

## Verifica

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Contenuti modificabili

- `src/data/navigation.ts` - voci menu e sottomenu Servizi.
- `src/data/products.ts` - prodotti, piattaforme, badge stato e disponibilità partnership.
- `src/data/services.ts` - servizi regolatori, sviluppo prodotto e scrittura brevetti.
- `src/data/applications.ts` - applicazioni e testi delle card.
- `src/data/site.ts` - configurazione generale, testi strategici, pagine, sezioni homepage e SEO keyword.

## Logo e immagini

- Inserisci il logo in `public/images/micromed-logo.png`.
- Il sito usa automaticamente quel file in navbar e footer; se manca, mostra un fallback testuale.
- L'immagine hero attuale è `public/images/mineral-technology-hero.png`.

## Colori

La palette è in `tailwind.config.ts`:

- blu navy profondo `#17324D`
- grigio ardesia `#5D7082`
- grigio tecnico chiaro `#BEC6CD`
- bianco caldo `#F7F9FA`
- bianco `#FFFFFF`

## Da completare prima della pubblicazione

- Contatti reali.
- Logo ufficiale.
- Immagini reali di prodotti, laboratorio, superfici o applicazioni.
- Dettagli brevetti pubblicabili.
- Collegamento del form a endpoint, CRM o servizio email.
- Testi legali, privacy e cookie policy.
