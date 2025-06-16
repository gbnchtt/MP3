const screen = document.getElementById("screenContent");
const ipodView = document.getElementById("ipodView");
const webView = document.getElementById("webView");

let selectedIndex = null;



function renderMenu() {
  screen.innerHTML = '<div class="menu"><ul style="list-style:none;padding:0;margin:0;">' + titles.map((t, i) => {
    return `<li style="padding:4px;${i === current ? 'background:#007aff;color:white;border-radius:4px;' : ''}">${t}</li>`;
  }).join('') + '</ul></div>';
}

function showMenu() {
  const menuItems = [
    "Introduzione",
    "Funzionamento",
    "Impatto sull'industria musicale",
    "Aspetti legali ed etici",
    "Formati successivi",
    "Eredità e impatto culturale",

  ];

  let html = '<div class="menu-title">iPod</div>';
  html += '<ul class="menu">';
  menuItems.forEach((item, i) => {
    const activeClass = (i === selectedIndex) ? 'active' : '';
    html += `<li class="${activeClass}" onclick="handleClick(${i})">${item}</li>`;
  });
  html += '</ul>';
  document.getElementById('screenContent').innerHTML = html;
}

function handleClick(index) {
  selectedIndex = index;    // aggiorna la voce selezionata
  showContent(index);       // mostra il contenuto
  showMenu();               // ridisegna il menu con evidenziazione aggiornata
}



function showContent(index) {
  const sections = [
    {
      title: "Introduzione",
      content: `
        <p>L’MP3 (MPEG-1 Audio Layer III) è un formato di compressione audio <strong>lossy</strong> sviluppato nei primi anni ’90 con l’obiettivo di ridurre drasticamente le dimensioni dei file audio mantenendo una qualità d’ascolto percepita accettabile. Utilizza algoritmi basati su modelli di <em>psicoacustica</em> (studio della percezione del suono) per eliminare le informazioni sonore meno rilevanti per l’orecchio umano, riducendo il bitrate fino a un decimo rispetto ai file PCM (es. WAV), con perdite minime per l’ascoltatore medio.
        
        Il formato fu sviluppato all’interno del progetto <strong>MPEG</strong> (Moving Picture Experts Group), come parte dello standard MPEG-1 per la compressione audio-video. Figura centrale nel suo sviluppo è <strong>Karlheinz Brandenburg</strong>, ricercatore del Fraunhofer Institute, che lavorò a lungo sulla codifica percettiva. L’MP3 fu standardizzato nel 1993, ma si diffuse su larga scala solo verso la fine degli anni '90, grazie a software come <em>Winamp</em> e all’avvento della condivisione di file via Internet.</p>
        
        <p>Prima dell’MP3, l’audio digitale era memorizzato in formati non compressi come WAV o AIFF, che occupavano circa 10 MB per ogni minuto di audio stereo a 44.1 kHz/16 bit. L’MP3 permise di comprimere la stessa traccia a 128 kbps, riducendo lo spazio occupato a circa 1 MB al minuto, rendendo possibile l’archiviazione e la trasmissione di musica digitale anche con la limitata banda larga dell’epoca.
        
        L’introduzione dell’MP3 ha segnato un punto di svolta nel mondo della musica: ha favorito la nascita del <em>file sharing</em> (es. Napster), ha anticipato i lettori portatili digitali e ha costretto l’industria discografica a ripensare il proprio modello di distribuzione.</p>
      `
    },
     
    {
      title: "Funzionamento",
      content: `
        <p>Il formato MP3 è un sistema di compressione audio <strong>lossy</strong>, cioè con perdita di dati, progettato per ridurre la dimensione dei file mantenendo una qualità sonora adeguata. Si basa su principi di <em>psicoacustica</em>, che studiano come l’orecchio umano percepisce i suoni, eliminando quelli meno rilevanti.</p>
        <div style="height: 8px;"></div>

        <h4>Compressione psicoacustica: cosa viene eliminato?</h4>
        <p>L’MP3 sfrutta diverse caratteristiche dell’udito:</p>
        <ul>
          <li>- <strong>Mascheramento tonale:</strong> suoni deboli accanto a suoni forti diventano impercettibili.</li>
          <li>- <strong>Mascheramento temporale:</strong> dopo un suono forte, suoni deboli successivi possono passare inosservati.</li>
          <li>- <strong>Frequenze estreme:</strong> molto alte o molto basse sono spesso inudibili.</li>
        </ul>
    <div style="height: 8px;"></div>
        <h4>Processo di codifica</h4>
        <p>La codifica MP3 segue questi passaggi:</p>
        <ol>
        <li><strong>- Suddivisione in frame:</strong> il segnale audio viene diviso in blocchi da 1152 campioni.</li>
        <li><strong>- Trasformata MDCT:</strong> converte il segnale dal dominio del tempo a quello della frequenza.</li>
        <li><strong>- Modello psicoacustico:</strong> identifica le frequenze eliminabili o quantizzabili.</li>
        <li><strong>- Quantizzazione scalare:</strong> frequenze meno importanti ricevono meno bit, le principali più precisione.</li>
        <li><strong>- Codifica Huffman:</strong> ulteriore compressione attribuendo codici brevi ai simboli più frequenti.</li>
        <li><strong>- Bitstream finale:</strong> include i dati compressi, header e metadati opzionali (es. tag ID3).</li>
        </ol>
    <div style="height: 8px;"></div>

        <h4>Bitrate e qualità</h4>
  
    
        <table style="width: 100%; border-collapse: collapse; font-size: 15.5 px; margin-top: 10px;">
          <thead>
            <tr>
              <th style="padding: 6px; border-bottom: 1px solid #ccc; text-align: left;">Bitrate</th>
              <th style="padding: 6px; border-bottom: 1px solid #ccc; text-align: left;">Qualità</th>
              <th style="padding: 6px; border-bottom: 1px solid #ccc; text-align: left;">Uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">96 kbps</td>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">Bassa</td>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">Streaming mobile</td>
            </tr>
            <tr>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">128 kbps</td>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">Buona (standard MP3)</td>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">File sharing, streaming generico</td>
            </tr>
            <tr>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">192 kbps</td>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">Alta</td>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">Archiviazione personale</td>
            </tr>
            <tr>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">320 kbps</td>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">Molto alta</td>
              <td style="padding: 6px; border-bottom: 1px solid #ccc;">Riproduzione ad alta fedeltà</td>
            </tr>
          </tbody>
        </table>
    <div style="height: 8px;"></div>

        <h4>Decodifica</h4>
        <p>Il decoder esegue il processo inverso: legge il bitstream, decodifica Huffman, ricostruisce i dati quantizzati, applica l’IMDCT (trasformata inversa) e restituisce un segnale PCM pronto alla riproduzione.</p>
      
      <div style="height: 12px;"></div>

<h4>Un esempio storico: “Tom’s Diner”</h4>
<p>Durante lo sviluppo del formato MP3, i ricercatori del Fraunhofer Institute cercavano un brano adatto per testare la qualità della compressione. Scelsero “Tom’s Diner” di Suzanne Vega, una canzone a cappella la cui voce nitida e costante era ideale per evidenziare artefatti di compressione. Questo brano è oggi considerato simbolicamente il “primo MP3”.</p>
<p>Puoi ascoltarne un estratto qui sotto:</p>

<br>

<audio controls style="margin-top: 10px; width: 100%; max-width: 400px;">
  <source src="toms_diner.mp3" type="audio/mpeg">
</audio>

      
     `


    }
,    
    
    
{
  title: "Impatto sull'industria musicale",
  content: `
    <p>Dopo la sua standardizzazione nel 1993, il formato MP3 rimase inizialmente confinato all’ambito tecnico e accademico, anche a causa della scarsità di strumenti per codifica e riproduzione. Tuttavia, verso la fine degli anni ’90, l’MP3 conobbe una rapida diffusione globale, grazie a tre fattori chiave: la diffusione di Internet, la nascita del software libero di codifica o decodifica e l’emergere della cultura del file sharing.</p>
<div style="height: 8px;"></div>

    <h4>La svolta: software e file sharing</h4>
    <p>Nel 1997 viene rilasciato <strong>Winamp</strong>, uno dei primi lettori MP3 per Windows, leggero e gratuito. Nello stesso periodo, Fraunhofer rilascia il <strong>LAME encoder</strong>, un codificatore open source che migliora la qualità e l’accessibilità del formato. Questi strumenti permisero a milioni di utenti di estrarre l’audio dai CD e convertirlo in formato MP3, creando così librerie musicali digitali personali.
    La vera esplosione avviene con <strong>Napster</strong> (1999), la prima piattaforma di condivisione peer-to-peer (P2P) dedicata allo scambio di file MP3. Il formato, leggero e abbastanza fedele, era perfetto per le velocità limitate dei modem dell’epoca. In pochi mesi, Napster cambiò radicalmente il modo in cui la musica veniva cercata, ottenuta e condivisa.</p>
<div style="height: 8px;"></div>

    <h4>Lettori MP3 e portabilità</h4>
    <p>Parallelamente, iniziarono a comparire i primi lettori MP3 portatili, dispositivi con memoria flash o hard disk capaci di contenere decine o centinaia di brani. Il più noto fu l’<strong>Apple iPod</strong> (2001), che contribuì in modo decisivo alla diffusione della musica digitale presso il grande pubblico.
    La combinazione <em>"MP3 + iPod + iTunes"</em> ha rappresentato una discontinuità nel modello di consumo: la musica non era più legata a un supporto fisico, ma poteva essere selezionata, organizzata e trasportata liberamente.</p>
<div style="height: 8px;"></div>

    <h4>Impatto sull’industria musicale</h4>
    <p>Il successo dell’MP3 ha messo in crisi il modello economico tradizionale dell’industria musicale basato sulla vendita di supporti fisici (CD, vinili). Le vendite globali di CD, che avevano raggiunto il picco di oltre 900 milioni di unità nel 1999, sono crollate a meno di 250 milioni entro il 2010.
    Le case discografiche si trovarono impreparate a contrastare la diffusione incontrollata di contenuti digitali, rispondendo inizialmente con azioni legali e protezioni DRM. Solo con l’arrivo di modelli legali di distribuzione digitale (come <strong>iTunes Store</strong> nel 2003, e <strong>Spotify</strong> nel 2008) si riuscì a stabilire un nuovo equilibrio.</p>
    <p>L’MP3 ha ridefinito non solo la tecnologia, ma anche le abitudini di ascolto: dalla musica "per album" a quella "per tracce", dalla proprietà all’accesso, dall’ascolto lineare alla playlist. Ha inoltre anticipato molte dinamiche dello streaming moderno e della cultura digitale attuale.</p>
  `
},
{
  title: "Aspetti legali ed etici",
  content: `
    <p>La diffusione del formato MP3 ha posto fin dall'inizio una serie di questioni legali e etiche, legate principalmente alla proprietà intellettuale e all’uso non autorizzato di contenuti protetti da copyright.</p>
<div style="height: 8px;"></div>

    <h4>Brevetti e licenze</h4>
    <p>L'MP3 fu coperto da una serie di brevetti internazionali detenuti dal <strong>Fraunhofer Institute</strong>, che impose l'obbligo di licenza d'uso per ogni encoder o decoder MP3 commerciale. Questo limitò inizialmente la libera adozione del formato, ma progetti open source come <strong>LAME</strong> ne facilitarono comunque la diffusione.</p>
<div style="height: 8px;"></div>

    <h4>Pirateria e condivisione illecita</h4>
    <p>L’uso dell’MP3 per la condivisione illegale di musica, favorita dalle reti peer-to-peer (<em>Napster, Kazaa, eMule</em>), causò un forte impatto economico sull’industria discografica, che rispose con azioni legali e tentativi di protezione come il <strong>DRM</strong>, spesso inefficace.</p>
<div style="height: 8px;"></div>

    <h4>Fine del brevetto</h4>
    <p>Nel 2017, con la scadenza dei brevetti, il <strong>Fraunhofer Institute</strong> cessò il programma di licenze, decretando la “fine ufficiale” dell’MP3 dal punto di vista legale. Il formato rimane tuttavia largamente usato per la sua compatibilità universale.</p>
  `
}
,
{
  title: "Formati successivi",
  content: `
    <p>L’MP3 fu progettato con l’obiettivo primario di ridurre il bitrate, in un’epoca in cui lo spazio di archiviazione e la larghezza di banda erano molto limitati. Con l’evoluzione delle tecnologie, sono diventati evidenti alcuni suoi limiti:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0;">
      <li>- Supporta solo frequenze di campionamento fino a 48 kHz.</li>
      <li>- È meno efficiente rispetto a codec più recenti (a parità di bitrate, offre qualità inferiore).</li>
      <li>- Utilizza modelli psicoacustici ormai superati.</li>
    </ul>
<div style="height: 8px;"></div>

    <h4>Successori del formato</h4>
    <p>Dalla metà degli anni 2000 in poi, sono comparsi codec audio più avanzati, in grado di offrire migliore qualità e maggiore efficienza rispetto all'MP3. I codec (compressori-decompressori) sono strumenti che permettono la codifica e la decodifica dei dati audio digitali, mentre i formati file (come MP3 o AAC) rappresentano il contenitore finale. I codec determinano quindi l’efficienza della compressione e la qualità del suono ottenuto.</p>

    <table style="width: 100%; border-collapse: collapse; font-size: 15.5px; margin-top: 10px;">
  <thead>
    <tr>
      <th style="padding: 6px; border-bottom: 1px solid #ccc; text-align: left;">Formato</th>
      <th style="padding: 6px; border-bottom: 1px solid #ccc; text-align: left;">Tipo di compressione</th>
      <th style="padding: 6px; border-bottom: 1px solid #ccc; text-align: left;">Vantaggi principali</th>
      <th style="padding: 6px; border-bottom: 1px solid #ccc; text-align: left;">Svantaggi / Limiti</th>
      <th style="padding: 6px; border-bottom: 1px solid #ccc; text-align: left;">Utilizzi principali</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">MP3</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Lossy</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Compatibilità universale, leggerezza</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Qualità inferiore, datato</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">File sharing, musica portatile</td>
    </tr>
    <tr>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">AAC</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Lossy</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Qualità superiore a parità di bitrate</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Brevettato</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Streaming (YouTube, iTunes)</td>
    </tr>
    <tr>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Opus</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Lossy</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Qualità alta anche a basso bitrate, bassa latenza</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Non sempre compatibile</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">VoIP, Discord, WebRTC</td>
    </tr>
    <tr>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Vorbis</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Lossy</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Open source, buona qualità <br> a basso bitrate</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Meno supporto hardware</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Software libero, giochi</td>
    </tr>
    <tr>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">FLAC</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Lossless</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Nessuna perdita, open source</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">File più grandi</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Archiviazione ad alta fedeltà</td>
    </tr>
    <tr>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">ALAC</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Lossless <br> (Apple)</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Qualità piena, integrato in Apple</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">Proprietario</td>
      <td style="padding: 6px; border-bottom: 1px solid #ccc;">iTunes, dispositivi Apple</td>
    </tr>
  </tbody>
</table>

<div style="height: 8px;"></div>

    <h4>Lo streaming e il cambio di paradigma</h4>
    <p>Il declino dell’MP3 è coinciso con l’ascesa dei servizi di streaming musicale (Spotify, Apple Music, YouTube Music). In questo contesto:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0;">
      <li>- La musica non viene più scaricata, ma ascoltata in tempo reale.</li>
      <li>- Gli utenti non gestiscono più file, ma accedono a cataloghi digitali online.</li>
      <li>- I formati usati dai servizi sono ottimizzati per streaming, con bitrate adattivi e maggiore efficienza (es. AAC o Opus).</li>
    </ul>
  `
}
,
{
  title: "Eredità e impatto culturale",
  content: `
    <p>Con l’MP3, la musica è diventata leggera, portabile, duplicabile: ad esempio, su un lettore MP3 da 1 GB era possibile archiviare circa 240 brani compressi a 128 kbps, ovvero l’equivalente di circa 20 album musicali completi. Chiunque, con un computer e una connessione Internet, poteva accedere a migliaia di brani, creare raccolte personalizzate e condividere file con altri utenti. Questo ha segnato una democratizzazione senza precedenti nella distribuzione musicale, riducendo il controllo esclusivo delle case discografiche e ampliando la libertà degli ascoltatori.</p>
<div style="height: 8px;"></div>

    <h4>Nascita della cultura digitale musicale</h4>
    <p>L'MP3 ha anticipato molte pratiche oggi comuni:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0;">
      <li>- Playlist personalizzate, al posto di album completi.</li>
      <li>- Condivisione sociale della musica, via web e P2P.</li>
      <li>- Organizzazione della libreria musicale tramite metadati (ID3 tags: titolo, artista, album, copertina).</li>
      <li>- Musica "on-the-go": i lettori MP3 e, successivamente, gli smartphone hanno reso l’ascolto musicale un’attività quotidiana e continua.</li>
    </ul>
<div style="height: 8px;"></div>

    <h4>Nuove figure e modelli di fruizione</h4>
    <p>L’era dell’MP3 ha favorito la nascita di nuove figure culturali:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0;">
      <li>- Il DJ digitale.</li>
      <li>- Il collezionista virtuale.</li>
      <li>- Il produttore indipendente, che poteva distribuire le sue tracce senza passare dalle etichette tradizionali.</li>
    </ul>
    <p>Ha inoltre introdotto il concetto di <em>musica liquida</em>, non più legata a un oggetto fisico ma a un file: flessibile, replicabile, volatile. Questo ha modificato anche il valore simbolico e affettivo della musica.</p>
<div style="height: 8px;"></div>

    <h4>Persistenza simbolica e nostalgia</h4>
    <p>Anche se oggi formati più efficienti lo hanno superato, l’MP3 mantiene un valore simbolico e nostalgico. È associato all'inizio della digitalizzazione culturale, a un'epoca di esplorazione musicale libera e spesso "pirata", che ha segnato una generazione.</p>
  `
},

  ];

  const section = sections[index];
  const html = `
  <section>
    ${section.content}
  </section>
`;

  document.getElementById('webView').innerHTML = html;
}



function moveUp() {
  if (currentSelection > 0) {
    currentSelection--;
    showMenu();
  }
}

function moveDown() {
  if (currentSelection < 4) { // numero voci - 1
    currentSelection++;
    showMenu();
  }
}



function selectFromClick(index) {
  currentSelection = index;
  selectItem(); // esegue la selezione proprio come il click centrale
}
window.onload = function () {
  showMenu();
};


renderMenu();


