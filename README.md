SUPSI 2025  
Corso d’interaction design, CV428.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 2: Atlante tecnologico: file multimediali

# Il formato MP3
Autore: Giorgia Bianchetti <br>
[Il formato MP3](https://gbnchtt.github.io/MP3/)


## Introduzione e tema
Per l’elaborato 2 del corso di Interaction Design, ci è stato chiesto di progettare e realizzare una pagina web capace di raccontare il funzionamento di un file multimediale. Ho deciso di concentrarmi sul formato MP3, un simbolo dell’era digitale che ha profondamente trasformato il nostro modo di ascoltare la musica.
Il sito accompagna l’utente attraverso una panoramica storica e tecnica, mostrando come questo formato abbia permesso di ridurre notevolmente le dimensioni dei file audio, mantenendo al contempo una qualità d’ascolto percepita come più che accettabile. Questa efficienza lo ha reso uno dei metodi di codifica audio più diffusi nella cultura digitale degli ultimi decenni.
Attraverso una simulazione dell’interfaccia dell’iPod, dispositivo emblema degli anni 2000, il progetto propone un'esperienza interattiva dal tono riflessivo e nostalgico. L’utente è invitato a interagire con lentezza, esplorando testi e contenuti in un ambiente che richiama l’ascolto personale e immersivo tipico di quegli anni.


## Riferimenti progettuali
Il progetto si ispira all'estetica e alla logica d'interazione del classico iPod di Apple, reinterpretandone la famosa interfaccia a rotella in ambiente web. Questo riferimento è stato utilizzato unicamente per costruire il menu iniziale del sito, concepito come indice navigabile che richiama l’esperienza di selezione e scoperta tipica dei dispositivi fisici.
La scelta dell’iPod non è casuale: introdotto nei primi anni 2000, è stato uno dei primi lettori MP3 ad ampia diffusione e ha contribuito in modo determinante alla trasformazione del consumo musicale.
Per quanto riguarda il resto della struttura visiva, ho adottato uno stile minimale, privo di decorazioni superflue, in modo da mettere in risalto i contenuti informativi e facilitare la lettura. La scelta di un design pulito e lineare riflette l’intenzione di creare un’interfaccia accessibile, leggibile e coerente con l’approccio divulgativo del progetto.


## Design dell’interfaccia e modalità di interazione
L'interfaccia del sito riproduce l’iPod nella sua forma classica, con una clickwheel funzionante che consente di navigare tra le voci del menu. È possibile spostarsi tra le sezioni utilizzando le quattro direzioni e selezionare con il tasto centrale, proprio come sul dispositivo originale. Tuttavia, per rendere l’esperienza più accessibile e flessibile, è anche possibile selezionare direttamente con il mouse la sezione desiderata all'interno dell’indice.
L’iPod rimane sempre visibile e fisso sulla sinistra dello schermo, mantenendo la funzione di menu persistente. Una volta selezionata una sezione, il contenuto si apre nella parte destra della pagina, che presenta uno scroll verticale semplice e ordinato, con testi suddivisi da titoli chiari per facilitare la lettura.
Inoltre L’utente non può "saltare" o "scorrere" rapidamente, ma deve esplorare i contenuti in modo sequenziale, come si faceva con i primi dispositivi digitali portatili.

[<img src="doc/cards.gif" width="500" alt="Magic trick">]()


## Tecnologia usata
Nunc consequat interdum varius sit amet mattis vulputate. Vehicula ipsum a arcu cursus vitae congue. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Quisque egestas diam in arcu cursus. Eget nulla facilisi etiam dignissim diam. Aenean sed adipiscing diam donec adipiscing tristique. Porttitor massa id neque aliquam. Sem viverra aliquet eget sit amet tellus cras. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Lacus sed turpis tincidunt id aliquet risus feugiat.


```JavaScript
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```

## Target e contesto d’uso
Il progetto è pensato per un pubblico che ha vissuto o vuole esplorare l’epoca dell’MP3 e dell’iPod, in particolare giovani adulti, studenti e designer interessati alla cultura digitale e all’evoluzione dei formati multimediali.
I contenuti del sito sono scritti in modo chiaro e accessibile, pensati per essere compresi anche da chi non ha familiarità con i termini tecnici. Alcuni concetti relativi alla compressione audio, alla perdita di dati e al funzionamento dell’MP3 vengono comunque affrontati, ma con un linguaggio semplificato e supportato da esempi concreti.
Il sito può essere utilizzato in ambito didattico, come introduzione ai formati digitali, oppure fruito individualmente.
