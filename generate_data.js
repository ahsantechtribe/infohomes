const fs = require("fs");

const data = [
  {
    Merged: "Andalucía",
    badge: "Comunidad",
  },
  {
    Merged: "Andalucía, Abla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Abrucena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Adamuz",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Adra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Agrón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aguadulce",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aguilar de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alameda",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alamedilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alanís",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albaida del Aljarafe",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albanchez de Mágina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alboloduy",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albolote",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albondón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albox",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albuñol",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albuñuelas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albuñán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Albánchez",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcalá de Guadaíra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcalá de los Gazules",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcalá del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcalá del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcalá la Real",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcaracejos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcaucín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcaudete",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcolea",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcolea del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcudia de Monteagud",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alcóntar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aldeaquemada",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aldeire",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alfacar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alfarnate",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alfarnatejo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Algar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Algarinejo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Algarrobo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Algatocín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Algeciras",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Algodonales",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Algámitas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alhabia",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alhama de Almería",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alhama de Granada",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alhaurín de la Torre",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alhaurín el Grande",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alhendín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alicún",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aljaraque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almadén de la Plata",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almargen",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almedinilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almegíjar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almensilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almería",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almodóvar del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almogía",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almonaster la Real",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almonte",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almuñécar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almáchar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Almócita",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alosno",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alozaina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alpandeire",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alpujarra de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alquife",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alsodux",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Alájar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Andújar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Antas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Antequera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aracena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arahal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arboleas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Archidona",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arcos de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ardales",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arenas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arenas del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arjona",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arjonilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Armilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Armuña de Almanzora",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aroche",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arquillos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arriate",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arroyo del Ojanco",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Arroyomolinos de León",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Atajate",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Atarfe",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ayamonte",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aznalcázar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Aznalcóllar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Añora",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bacares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Badolatosa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Baena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Baeza",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bailén",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Barbate",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bayarque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bayárcal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Baza",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Baños de la Encina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Beas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Beas de Granada",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Beas de Guadix",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Beas de Segura",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bedmar y Garcíez",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Begíjar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Beires",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Belalcázar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Belmez",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benacazón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benadalid",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benahadux",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benahavís",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benalauría",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benalmádena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benalup-Casas Viejas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benalúa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benalúa de las Villas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benamargosa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benamaurel",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benamejí",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benamocarra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benaocaz",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benaoján",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benarrabá",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benatae",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benitagla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Benizalón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bentarique",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Berja",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bollullos Par del Condado",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bollullos de la Mitación",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bonares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bormujos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bornos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Brenes",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bubión",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bujalance",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Burguillos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Busquístar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bédar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bélmez de la Moraleda",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Bérchules",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cabezas Rubias",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cabra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cabra del Santo Cristo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cacín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cala",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Calañas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Calicasas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Camas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cambil",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Campillo de Arenas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Campillos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Campofrío",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Campotéjar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Canena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Caniles",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Canillas de Aceituno",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Canillas de Albaida",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Canjáyar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cantillana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cantoria",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Capileira",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Carataunas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Carboneras",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Carboneros",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Carcabuey",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cardeña",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Carmona",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Carratraca",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Carrión de los Céspedes",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cartajima",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cartaya",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Casabermeja",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Casarabonela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Casares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Casariche",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castaño del Robledo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castellar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castellar de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castilblanco de los Arroyos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castilleja de Guzmán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castilleja de la Cuesta",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castilleja del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castillo de Locubín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castilléjar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castril",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castro de Filabres",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Castro del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cazalilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cazalla de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cazorla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cañada Rosal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cañaveral de León",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cañete de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cañete la Real",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cenes de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chauchina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chercos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chiclana de Segura",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chiclana de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chilluévar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chimeneas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chipiona",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chirivel",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Chucena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Churriana de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cijuela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cogollos de Guadix",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cogollos de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Colmenar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Colomera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Comares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Conil de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Conquista",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Constantina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Coria del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Coripe",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Corteconcepción",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cortegana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cortelazor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cortes de Baza",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cortes de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cortes y Graena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Coín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cuevas Bajas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cuevas de San Marcos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cuevas del Almanzora",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cuevas del Becerro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cuevas del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cumbres Mayores",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cumbres de San Bartolomé",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cádiar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cádiz",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cájar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cárcheles",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cártama",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cástaras",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cáñar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cóbdar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cómpeta",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Córdoba",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Córdoba, Arcángel",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Arroyo Del Moro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Arruzafilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Asomadilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Camino De Turruñuelos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Camping",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Campo De La Verdad-Miraflores",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Catedral",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Cañero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Centro Comercial",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Cercadilla-Medina Azahara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Cerro De La Golondrina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Ciudad Jardín",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, El Arenal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, El Brillante",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, El Naranjo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, El Patriarca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, El Salvador Y La Compañía",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, El Tablero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Electromecánicas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Fray Albino",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Fuensantilla-Edisol",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Fátima",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Huerta De La Marquesa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Huerta De La Reina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Huerta De San Rafael",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Huerta De Santa Isabel",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Huerta De Santa Isabel Oeste",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Huerta Del Rey De Vallellano",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, La Magdalena",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, La Trinidad, San Juan Y Todos Los Santos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Las Margaritas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Levante",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Los Morales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Miralbaida",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Molinos Altas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Moreras",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Olivos Borrachos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Ollerías",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, P.I. Amargacena",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, P.I. Chinales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, P.I. El Granadal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, P.I. Pedroches",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, P.I. Torrecillas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Palmeras",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Parque Azahara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Parque Cruz Conde",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Parque Fidiana",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Parque Figueroa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Polígono De La Fuensanta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Polígono Guadalquivir",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Polígono Poniente",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Ribera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Sagunto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, San Andrés-San Pablo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, San Basilio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, San Cayetano",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, San Francisco-Ribera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, San Lorenzo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, San Miguel-Capuchinos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, San Pedro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, San Rafael De La Albaida",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Santa Marina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Santa Rosa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Santuario",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Sector Sur",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Valdeolleros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Vista Alegre",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Viñuela-Rescatado",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Córdoba, Zumbacón-Gavilán",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Cúllar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cúllar Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Cútar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Dalías",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Darro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Dehesas de Guadix",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Deifontes",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Diezma",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Dos Hermanas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Dos Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Doña Mencía",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Dílar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Dólar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Dúdar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Dúrcal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Almendro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Borge",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Bosque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Burgo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Campillo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Carpio",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Castillo de las Guardas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Cerro de Andévalo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Coronil",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Cuervo de Sevilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Ejido",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Garrobo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Gastor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Granado",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Guijo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Madroño",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Pedroso",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Puerto de Santa María",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Real de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Ronquillo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Rubio",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Saucejo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Viso",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, El Viso del Alcor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Encinas Reales",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Encinasola",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Enix",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Escacena del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Escañuela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Escúzar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Espartinas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Espejo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Espelúy",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Espera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Espiel",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Estepa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Estepona",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Faraján",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Felix",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fernán-Núñez",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ferreira",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fines",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fiñana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fondón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fonelas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Frailes",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Freila",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Frigiliana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuengirola",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuensanta de Martos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuente Obejuna",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuente Palmera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuente Vaqueros",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuente de Piedra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuente la Lancha",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuente-Tójar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuenteheridos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuentes de Andalucía",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Fuerte del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Galaroza",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Galera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Garrucha",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gaucín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gelves",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Genalguacil",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gerena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gibraleón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gilena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gines",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gobernador",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gorafe",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Granada",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Granada, Albaycín",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Almanjáyar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Angustias-Chana-Encina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Bobadilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Bola De Oro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Camino De Los Neveros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Camino De Ronda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Campo Verde",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Campus De La Salud",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Carretera De La Sierra",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Cartuja",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Casería De Montijo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Castaño-Mirasierra",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Centro-Sagrario",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Cerrillo De Maracena",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Cervantes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, El Fargue",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Fígares",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Haza Grande",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Joaquina Eguaras",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, La Cruz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, La Paz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Lancha Del Genil",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Pajaritos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Parque Nueva Granada",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Plaza De Toros-Doctores-San Lázaro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Rey Badis",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Rosaleda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Sacromonte",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, San Francisco Javier",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, San Ildefonso",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, San Matías-Realejo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Granada, Zaidín-Vergeles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Grazalema",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Guadahortuna",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Guadalcanal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Guadalcázar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Guadix",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gualchos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Guaro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Guarromán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Guillena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gádor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Génave",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gérgal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Gójar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Güejar Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Güevéjar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Herrera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Higuera de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Higuera de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Hinojales",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Hinojares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Hinojos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Hinojosa del Duque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Hornachuelos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Hornos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huelma",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huesa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Humilladero",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huécija",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huélago",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huéneja",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huércal de Almería",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huércal-Overa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huéscar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huétor Tájar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huétor Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huétor de Santillán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Huévar del Aljarafe",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ibros",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Igualeja",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Illar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Illora",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Instinción",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Isla Cristina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Isla Mayor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Istán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Itrabo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Iznalloz",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Iznate",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Iznatoraf",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Iznájar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jabalquinto",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jabugo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jamilena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jayena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jaén",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jerez de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jerez del Marquesado",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jete",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jimena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jimena de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jimera de Líbar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jubrique",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jun",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Juviles",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Jódar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Júzcar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Algaba",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Calahorra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Campana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Carlota",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Carolina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Granada de Río-Tinto",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Granjuela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Guardia de Jaén",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Iruela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Lantejuela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Luisiana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Línea de la Concepción",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Malahá",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Mojonera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Nava",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Palma del Condado",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Peza",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Puebla de Cazalla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Puebla de los Infantes",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Puebla del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Puerta de Segura",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Rambla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Rinconada",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Roda de Andalucía",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Taha",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Victoria",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, La Zubia",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lahiguera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lanjarón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lanteira",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Laroya",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Las Cabezas de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Las Gabias",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Las Navas de la Concepción",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Las Tres Villas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lebrija",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lecrín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lentegí",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lepe",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Linares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Linares de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lobras",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Loja",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lopera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lora de Estepa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lora del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Barrios",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Blázque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Corrales",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Gallardos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Guajares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Marines",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Molares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Palacios y Villafranca",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Los Villares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lubrín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lucainena de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lucena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lucena del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lugros",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lupión",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Luque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Láchar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Láujar de Andarax",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Líjar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lúcar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Lújar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Macael",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Macharaviaya",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Mairena del Alcor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Mairena del Aljarafe",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Mancha Real",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Manilva",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Manzanilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Maracena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Marbella",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Marchal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Marchena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Marinaleda",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Marmolejo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Martos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Martín de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, María",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Medina-Sidonia",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Mengíbar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Mijas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Minas de Riotinto",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Moclinejo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Moclín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Moguer",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Mojácar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Mollina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Molvízar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Monachil",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Monda",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montalbán de Córdoba",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montefrío",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montejaque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montejícar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montellano",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montemayor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montillana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montizón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Montoro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Monturque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Moraleda de Zafayona",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Morelábor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Moriles",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Morón de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Motril",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Murtas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Málaga",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Málaga, 25 Años De Paz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, 28 De Febrero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, 4 De Diciembre",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, 503 Viviendas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, 720 Viviendas-Huerta La Palma",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Aeropuerto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Alaska",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Alegría De La Huerta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Alhambra Del Mar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Alicate Playa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Almudena",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Aloha",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Alta Vista",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Altos Reales-Las Brisas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Amoniaco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ampliación Universidad",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ancón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Andasol",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ardira",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arquillos Cantero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arraijanal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arroyo De Las Casas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arroyo De Las Piedras",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arroyo De Los Ángeles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arroyo Del Cuarto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arroyo España",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arroyo Naguelles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arroyo Primero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Arroyo Segundo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Artola Alta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Artola Baja",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Atabal Este",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Atalaya Río Verde",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ave María",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Bahía De Marbella",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Balcones De Sierra Blanca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Balcón De San Pedro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Barceló",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Barcenillas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Barrio Alto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Baños Del Carmen",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Bellavista",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Bello Horizonte I",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Bello Horizonte Ii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Bello Horizonte Iii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Bosquemar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Buenavista",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Butano",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Calahonda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Calvario",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Camino",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Camino De Olías",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Camino De Suárez",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Camino Del Colmenar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Campamento Benitez",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Campanillas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Campo De Golf",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Campos Elíseos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Capuchinos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Carambuco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Carib-Playa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Carlinda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Carlos Haya",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Carranque",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Carril Del Relojero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Casablanca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cascada De Camoján",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Castañetas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Castillo Santa Catalina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cañada De Ceuta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cañada De Los Cardos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cañada De Los Ingleses",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cañaveral",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cementerio Churriana",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cementerio San Rafael",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Centro De Ocio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Centro De Transporte De Mercancias",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Centro Histórico",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Centro Marbella",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cerca De Los Monteros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cerrado Calderón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cerrado De Elviria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cerro Del Espartal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Churriana",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ciudad Internacional",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ciudad Jardín",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ciudad Santa Inés",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ciudad Universitaria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Clavero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Colinas Del Limonar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Colmenarejos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Colonia Santa Inés",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Comunidad Del Rodeo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Conde De Iza",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Conde De Ureña",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Coral Beach",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cormercial Villarrosa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cortijo Alto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cortijo Bazán",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cortijo Blanco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cortijo De Maza",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cortijo De Naguelles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cortijo De Torres",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cortijo San Julián Ind.",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cortijo Vallejo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Costa Bella",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Coto De Los Dolores",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cristo De La Epidemia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cruz Del Humilladero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Cuatro Vientos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Depuradora Guadalhorce",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Divina Pastora",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Dos Hermanas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Echevarría Del Palo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Atabal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Barrio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Barronal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Brillante",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Bulto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Candado",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Capricho",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Carmen",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Chanquete",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Chaparral",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Coronel",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Cortijuelo-Junta De Los Caminos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Cruce",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Cuartón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Cénit",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Cónsul",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Cónsul Ii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Drago",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Duende",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Ejido",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Gamonal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Higueral",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Ingenio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Lagartillo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Limonar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Limonero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Mayorazgo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Mirador",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Molinillo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Morlaco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Olivar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Palo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Polvorín",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Prado",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Real",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Real De Zaragoza",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Real Panorama",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Retiro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Rocío",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Romeral",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Rosario",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Tarajal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Tejar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Tomillar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Torcal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Trapiche",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, El Ángel",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Elviria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ensanche Centro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ensanche Sur",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Estación De Campanillas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Estación De Los Prados",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Explanada De La Estación",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Finca Del Candado",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Finca El Pato",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Finca La Concepción",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Finca La Hacienda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Finca La Palma",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Finca Monsálvez",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Finca San José",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Florisol",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Forestal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Francisco Norte",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Fuente Alegre",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Fuente Nueva",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Fuentes Del Rodeo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Fábrica De Cemento",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Gamarra",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Girón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Golden Beach",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Golf De Río Real",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Gral. Franco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Granja Suárez",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Guadaiza",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Guadalcántara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Guadaljaire",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Guadalmar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Guadalmina Alta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Guadalmina Baja",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Altamira",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Bizcocherero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Cabello",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Capitán",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Clavero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Cortés",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Las Chapas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Los Montes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Miramar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Paredes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Platero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Roldán",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hacienda Sánchez Blanca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Haza Cuevas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Haza De La Pesebrera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Haza Del Campillo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Haza Del Conde",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Haza Honda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Heliomar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hispania",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Holanducía",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Hotel Las Chapas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Huelín",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Huerta Belón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Huerta De Los Cristales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Huerta Del Prado",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Huerta Nueva",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Huerte Nueva",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Huertecillas Mañas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Huerto Del Café",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ind San Alberto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ind San Alberto Ii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ind. La Pelusa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ind. Pilar Del Prado",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Intelhorce",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Jarazmín",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Jardín De La Abadía",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Jardín De Málaga",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Jardín Virginia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Judia Sur",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Alcazaba",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Alcobilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Alzambra",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Araña",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Asunción",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Aurora",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Azucarera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Bajadilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Barriguilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Bresca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Caleta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Campana",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Cantera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Capellanía",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Caridad",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Carolina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Casita De Madera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Cañada",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Cizaña",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Coneja",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Consula",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Corta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Dama De Noche",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Encarnación",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Ermita",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Estación",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Florida",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Fábrica",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Goleta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Judía",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Loma",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Luz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Malagueta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Manía",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Merced",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Montúa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Mosca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Noria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Palma",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Palmilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Patera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Pavona Real",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Paz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Pelusa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Pelusilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Pepina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Platera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Princesa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Reserva De Marbella I",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Reserva De Marbella Ii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Roca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Rosaleda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Torrecilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Tosca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Trinidad Este",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Trinidad Oeste",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Térmica",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Unión",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Vaguada",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Victoria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Virginia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, La Viña",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lagunillas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Acacias",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Albarizas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Cancelas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Cañas Beach",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Chapas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Cuevas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Cumbres De Elviria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Delicias",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Espeñuelas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Flores",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Lomas De Marbella Club",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Manseras",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Medranas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Mimosas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Morillas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Morillas Ii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Morillas-Puerto Torre",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Niñas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Palmas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Palmeras",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Pedrizas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Petunias",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Torres",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Las Virreinas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Linda Vista Alta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Linda Vista Norte",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Linda Vista Playa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lindasol",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Llanos De San Ramón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Loma Del Campo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lomas De Río Verde",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lomas De San Antón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lomas Del Pozuelo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lomas Del Puerto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lomas Del Virrey",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Loreto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Almendros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Altos De Marbella",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Antonios",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Asperones 1 Y 3",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Casinis",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Castillejos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Catalanes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Chochales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Chopos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Cipreses",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Girasoles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Guindos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Jazmínes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Magnolios",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Manantiales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Millones",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Molinos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Monteros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Morales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Morales 1",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Morales 2",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Naranjos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Paredones",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Paseros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Pinos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Pinos Del Limonar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Pinos Del Ángel",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Prados",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Ramos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Rosales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Tilos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Tomillares",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Verdiales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Viveros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Los Ángeles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lourdes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Lunamar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Mainake",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Mangas Verdes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Maqueda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Marbella Club",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Marbella Del Este",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Marbella Hill Club",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Marbella Mar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Marbella-Sierra Blanca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Marbesa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Marina Del Puente",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Marqués Del Duero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Martiricos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Mercamálaga",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Minerva",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Miraflores",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Miraflores Alto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Miraflores De Los Ángeles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Miraflores Del Palo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Miramar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Miramar Del Palo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Miranda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Molino Viento",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Monte Dorado",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Monte Gibralfaro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Monte Paraiso",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Monte Sancha",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Montecarlo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Málaga 2000",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Mármoles Este",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Mármoles Oeste",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ntra. Sra. Del Carmen",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Nuestra Señora De Fátima",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Nueva Alcántara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Nueva Málaga",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Nuevo San Andrés",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Nuevo San Andrés 2",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Oliveros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Olletas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Orozco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, P.I. De Elviria V",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, P.I. El Álamo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, P.I. La Campana",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, P.I. San Pedro De Alcántara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pacífico",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Palacio De Deportes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Palm Beach",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Ayala",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Cementerio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Clavero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Del Guadalhorce",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Del Morlaco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Del Norte",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Del Sur",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Industrial Travéne",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Las Virreinas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Mediterráneo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Tecnológico",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Parque Victoria-Eugenia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pavero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pedregalejo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pedregalejo Playa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Peinado Grande",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Perchel Norte",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Perchel Sur",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Peri Pt 4 Los Almendros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Peñuelas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pilar Del Prado",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pinar De Las Chapas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pinares De Olletas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pinares De San Antón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pinomar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pizarrillo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Playa Del Arenal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Playa Virginia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Playas Andaluzas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Playas Del Palo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Playas Españolas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Plaza De Toros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Plaza De Toros Vieja",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Podadera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Com. Pacífico",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Comercial Guadalhorce",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ctra. De Cártama",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Aeropuerto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Alameda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Alcalde Díaz Zafra",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Carranza",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. El Tarajal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. El Viso",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Guadalhorce",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Guadaljaire",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Haza Angosta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Haza De La Cruz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Huerta Del Correo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Intelhorce",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. La Estrella",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. La Huertecilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Los Guindos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Mi Málaga",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Nuevo San André",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Pérez Texeira",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Ronda Exterior",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Santa Bárbara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Santa Teresa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Siemens",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Valdicio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Villa Rosa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol. Ind. Villa Rosa Ii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Pol.Ind. Carretera De Cártama",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Poli. Ind. Santa Cruz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Polígono Alameda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Polígono Industrial San Luis",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Porqueroles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Portada Alta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Puente Romano",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Puerta Blanca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Puerta Del Mar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Puerto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Puerto Banus",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Puerto Oeste",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Puertosol",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Puya",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Quinta Alegre",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, R.E.N.F.E.",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Rancho Hotel",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Rancho Wellington",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Recinto Ferial Cortijo De Torres",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Regio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Reserva De Los Monteros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Residencial Tiempo Libre",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ricmar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Rocío De Naguelles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Rodeo Alto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Rojas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Roquero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Río Verde Playa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Sacaba Beach",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Sagrada Familia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Salinas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Salto Del Agua",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Samisol",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Alberto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Andrés",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Antonio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Bernabé",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Carlos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Carlos Condote",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Enrique",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Felipe Neri",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Fernando",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Francisco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Isidro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Jerónimo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San José",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San José Del Viso",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Juan-El Albaricocal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Julián",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Martín",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Miguel",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Pedro Centro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, San Rafael",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Amalia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Clara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Cristina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Isabebl Puerto De La Torre",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Isabel",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Julia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Margarita",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Marta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa María",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Paula",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Paula Miramar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Rosalía",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Tecla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Santa Águeda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Segalerva",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Segovia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Seminario",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Señorío De Marbella",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Sierra Blanquilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Sixto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Soliva Este",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Supermanzana A",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Supermanzana B",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Supermanzana C",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Supermanzana D",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Supermanzana F",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Supermanzana G",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Supermanzana H",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Supermanzana J-K-L",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Suárez",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Sánchez Blanca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Tabacalera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Tasara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Teatinos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Tejar De Salyt",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Terrera Oria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Tiro De Pichón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Tiro Pichón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Torre Atalaya",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Torre De San Telmo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Torre Del Río",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Torremar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Torres De La Serra",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Torres Murciano",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Trading Finca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Universidad Laboral",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Valdeolletas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Valdeolletas Norte",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Valle De Los Galanes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Valle Del Sol",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Vallejo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Vega Del Oro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ventaja Alta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Ventura Del Mar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Victoria Eugenia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Villa Cristina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Villa Parra",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Virgen De Belén",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Virgen De Las Angustias",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Virgen Del Carmen",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Virgen Del Pilar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Virreina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Virreina Alta",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Vistafranca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Vistamar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Viña Del Marfil",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Wittemberg",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Málaga, Xarblanca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Nacimiento",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Navas de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Nerja",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Nerva",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Nevada",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Niebla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Nigüelas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Noalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Nueva Carteya",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Níjar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Nívar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Obejo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ogíjares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ohanes",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ojén",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Olivares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Olula de Castro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Olula del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Olvera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Orce",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Orcera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Oria",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Osuna",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Otura",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Otívar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Padul",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Padules",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Palenciana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Palma del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Palomares del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pampaneira",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Paradas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Parauta",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Partaloa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Paterna de Rivera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Paterna del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Paterna del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Paymogo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Peal de Becerro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pechina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pedrera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pedro Abad",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pedro Martínez",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pedroche",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pegalajar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Peligros",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Periana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Peñaflor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Peñarroya-Pueblonuevo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pilas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pinos Genil",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pinos Puente",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pizarra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Polopos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Porcuna",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Posadas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pozo Alcón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pozoblanco",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Prado del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Priego de Córdoba",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pruna",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Puebla de Don Fadrique",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Puebla de Guzmán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Puente Genil",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Puente de Génave",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Puerto Moral",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Puerto Real",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Puerto Serrano",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pujerra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pulianas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pulpí",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Punta Umbría",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Purchena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Purullena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Píñar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Pórtugos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Quesada",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Quéntar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rincón de la Victoria",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Riogordo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rociana del Condado",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ronda",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Roquetas de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rosal de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rota",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rubite",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rus",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rute",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Rágol",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sabiote",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Salar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Salares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Salobreña",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Salteras",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San Bartolomé de la Torre",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San Fernando",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San José del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San Juan de Aznalfarache",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San Juan del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San Nicolás del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San Roque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San Sebastián de los Ballesteros",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, San Silvestre de Guzmán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sanlúcar de Barrameda",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sanlúcar de Guadiana",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sanlúcar la Mayor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Ana la Real",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Bárbara de Casa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Cruz de Marchena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Cruz del Comercio",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Elena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Eufemia",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Fe",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Fe de Mondújar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santa Olalla del Cala",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santaella",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santiago de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santiago-Pontones",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santiponce",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santisteban del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Santo Tomé",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sayalonga",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sedella",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Segura de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Senés",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Serón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Setenil de las Bodegas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sevilla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sevilla, Aeropuerto Viejo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Alfalfa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Amate",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Arenal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Avenida De La Paz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Bami",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Barriada De Pineda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Barrio León",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Begoña-Santa Catalina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Bellavista",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Campos De Soria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Cantaelgallo-Los Frailes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Cantely",
    badge: "Barrio",
  },
  {
    Merged:
      "Andalucía, Sevilla, Carretera De Carmona-María Auxiliadora-Fontanal",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Cartuja",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Centro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Cerámica Bellavisa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Cisne Alto-Santa María De Gracia",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Ciudad Blanca-Las Torres",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Ciudad Jardín",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Colores-Entreparques",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Consolación",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Cruz Roja-Capuchinos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Destilerías",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Doctor Berraquer-Renfe-Policlínico",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Doña Mercedes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Caballo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Cano-Los Bermejales",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Carmen",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Castillo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Cerezo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Cerro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Chaparral",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Garabato",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Gordillo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Palancar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Palmarillo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Plantinar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Porvenir",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Quijote",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Rocío",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Tardón-El Carmen",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, El Torrejón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Encarnación-Regina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Entrenúcleos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Federico Mayo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Felipe Ii-Los Diez Mandamientos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Feria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Fuentequintillo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Giralda Sur",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Hacienda Grande De Quinto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Heliópolis",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Hermandades-La Carrasca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Huerta De La Salud",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Huerta De San Rafael",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Huerta De Santa Teresa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Huerta Del Pilar",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Ibarburu",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Jardines Del Edén-Parque Alcosa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Jardín De Los Naranjos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Jesús Del Gran Poder",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Jimena",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Juan De La Cosa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Juan Xxii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Bachillera",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Barzola",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Buhaira",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Calzada",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Corza",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Florida",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Hacienda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Jarana",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Juncal-Híspalis",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Lagunilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Moneda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Montilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Oliva",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Palmilla-Doctor Marañón",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Paz-Las Golondrinas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Plata",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, La Polvora",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Almenas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Avenidas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Cruces Y El Inglés",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Ganchozas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Huertas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Infantas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Letanías",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Naciones-Parque Atlántico-Las Dalias",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Palmeras De Condequinto",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Portadas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Las Viñas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, León Xiii-Los Naranjos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Arcos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Carteros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Cerros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Molinos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Montecillos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Potros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Príncipes-La Fontanilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Pájaros",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Los Remedios",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Macarena-Tres Huertas-Macarena 5",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Montelirio",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Museo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Nervión",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Nuestra Señora Del Amparo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Olivar De Quintos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Oroppo-Entrenaranjos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, P.I. Cadesa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, P.I. Ciudad Blanca",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, P.I. Las Casillas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, P.I. Las Marías Bajas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, P.I. Los Candiles",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, P.I. Orippo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Palacio De Congresos-Urbadiez-Entrepuentes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Palmete",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Parque Giralda",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Pedro Salvador-Las Palmeritas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Pino Flores",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Pino Montano",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Polígono Norte",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Polígono Sur",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Prado-Parque De Maria Luisa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Puerto De Sevilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Pío Xii",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Recinto Ferial",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Redondilla",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Retiro Obrero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Rochelambert",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Bartolomé",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Bernardo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Carlos-Tartessos",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Diego",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Federico Echajuy",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Gil",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Hilario",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Isidoro",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Jerónimo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San José",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San José Obrero",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Julián",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Lorenzo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Matías",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Pablo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Pablo A Y B",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Pablo C",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Pablo D Y E",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Roque",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Sebastián",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, San Vicente",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Santa Ana",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Santa Aurelia-Cantábrico-Atlántico-La Romería",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Santa Catalina",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Santa Clara",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Santa Cruz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Santa Justa Y Rufina-Parque Miraflores",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Santa María De Ordas-San Nicolás",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Santa Teresa",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Sector Sur-La Palmera-Reina Mercedes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Serrezuela",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Tablada",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Tabladilla-La Estrella",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Tiro De Línea-Santa Genoveva",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Torreblanca De Los Caños",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Triana Este",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Triana Oeste",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Triana-Casco Antiguo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Valdezorras",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Venta Bermeja",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Victoria",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Villegas",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Virgen De La Luz",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Virgen De Los Reyes",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Virgen De Valme",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Virgen Del Rocío",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Vistazul",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Zodiaco",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sevilla, Árbol Gordo",
    badge: "Barrio",
  },
  {
    Merged: "Andalucía, Sierra de Yeguas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sierro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Siles",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Somontín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Soportújar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sorbas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sorihuela del Guadalimar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Sorvilán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Suflí",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Tabernas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Taberno",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Tahal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Tarifa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Teba",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Terque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Tocina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Tolox",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Tomares",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torre Alháquime",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torre del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torre-Cardela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torreblascopedro",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torrecampo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torredonjimeno",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torremolinos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torreperogil",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torres de Albánchez",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torrox",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Torvizcón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Totalán",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Trebujena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Trevélez",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Trigueros",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Turre",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Turrillas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Turón",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Tíjola",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ubrique",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ugíjar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Uleila del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Umbrete",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Urrácal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Utrera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Valdelarco",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Valdepeñas de Jaén",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Valencina de la Concepción",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Valenzuela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Valle de Abdalajís",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Valle del Zalabí",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Valsequillo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Valverde del Camino",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vegas del Genil",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vejer de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Velefique",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Ventas de Huelma",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Viator",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vilches",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villa del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villablanca",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villacarrillo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villafranca de Córdoba",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villaharta",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villalba del Alcor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villaluenga del Rosario",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villamanrique de la Condesa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villamartín",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villamena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva Mesía",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva de Algaidas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva de Córdoba",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva de Tapia",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva de la Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva de las Cruces",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva de los Castillejos",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva del Ariscal",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva del Arzobispo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva del Duque",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva del Rosario",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva del Río y Minas",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villanueva del Trabuco",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villaralto",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villardompardo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villarrasa",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villarrodrigo",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villatorres",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villaverde del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Villaviciosa de Córdoba",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Viñuela",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Válor",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vélez de Benaudalla",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vélez-Blanco",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vélez-Málaga",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vélez-Rubio",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Vícar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Víznar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Yunquera",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Zafarraya",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Zagra",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Zahara",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Zalamea la Real",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Zufre",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Zuheros",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Zurgena",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Zújar",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Álora",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Árchez",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Écija",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Órgiva",
    badge: "Ciudad",
  },
  {
    Merged: "Andalucía, Úbeda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón",
    badge: "Comunidad",
  },
  {
    Merged: "Aragón, Ababuj",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Abejuela",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Abiego",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Abizanda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Acered",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Adahuesca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aguarón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aguaviva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aguilar del Alfambra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aguilón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Agón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Agüero",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ainzón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aisa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alacón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aladrén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alagón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albalate de Cinca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albalate del Arzobispo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albalatillo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albarracín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albelda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albentosa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alberite de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albero Alto",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albero Bajo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alberuela de Tubo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Albeta",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alborge",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcaine",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcalá de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcalá de Gurrea",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcalá de Moncayo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcalá de la Selva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcalá del Obispo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcampell",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcañiz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcolea de Cinca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcorisa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alcubierre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alerre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alfajarín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alfambra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alfamén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alforque",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alfántega",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alhama de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aliaga",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Allepuz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alloza",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Almohaja",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Almonacid de la Cuba",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Almonacid de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Almudévar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Almunia de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Almuniente",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alobras",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alpartir",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alpeñés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Alquézar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Altorricón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ambel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Andorra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Anento",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Angüés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aniñón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ansó",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Antillón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aragüés del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aranda de Moncayo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Arcos de las Salinas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ardisa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Arens de Lledó",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Argavieso",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Argente",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Arguis",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ariza",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ariño",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Arándiga",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Arén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ateca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ayerbe",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Azaila",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Azanuy-Alins",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Azara",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Azlor",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Azuara",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Aínsa-Sobrarbe",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Añón de Moncayo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bagüés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bailo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Baldellou",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ballobar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Banastás",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Barbastro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Barbués",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Barbuñales",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bardallur",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Barrachina",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Baélls",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bañón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Beceite",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Belchite",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bello",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Belmonte de Gracián",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Belmonte de San José",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Belver de Cinca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Benabarre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Benasque",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Berbegal",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Berge",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Berrueco",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Biel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bielsa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bierge",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Biescas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bijuesca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Binaced",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Binéfar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Biota",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bisaurri",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Biscarrués",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bisimbre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Blancas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Blecua y Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Blesa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Boltaña",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bonansa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Boquiñeni",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Borau",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bordón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Borja",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Botorrita",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Brea de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bronchales",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Broto",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bubierca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bueña",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bujaraloz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bulbuente",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Burbáguena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bureta",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bádenas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Báguena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bárboles",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Bárcabo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cabañas de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cabra de Mora",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cadrete",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Calaceite",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Calamocha",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Calanda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Calatayud",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Calatorao",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Caldearenas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Calmarza",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Calomarde",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Camarena de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Camarillas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Camañas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Caminreal",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Campillo de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Camporrélls",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Canal de Berdún",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Candasnos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Canfranc",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cantavieja",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Capdesaso",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Capella",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Carenas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cariñena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Casbas de Huesca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cascante del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Caspe",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castejón de Alarba",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castejón de Monegros",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castejón de Sos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castejón de Tornos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castejón de Valdejasa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castejón de las Armas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castejón del Puente",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castelflorite",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castellote",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castelnou",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castelserás",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castiello de Jaca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castiliscar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castillazuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Castillonroy",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cedrillas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Celadas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cella",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cervera de la Cañada",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cerveruela",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cetina",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Chalamera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Chimillas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Chiprana",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Chodes",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Chía",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cinco Olivas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Clarés de Ribota",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Codo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Codos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Colungo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Contamina",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Corbalán",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cortes de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cosuenda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cretas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Crivillén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cuarte de Huerva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cubla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cucalón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cuevas Labradas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Cuevas de Almudén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Daroca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ejea de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ejulve",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Burgo de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Buste",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Castellar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Cuervo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Frago",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Frasno",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Grado",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Pobo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, El Pueyo de Araguás",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Embid de Ariza",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Encinacorba",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Erla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Escatrón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Escorihuela",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Escucha",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Esplús",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Estada",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Estadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Estercuel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Estopiñán del Castillo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fabara",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fago",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fanlo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fayón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ferreruela de Huerva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Figueruelas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fiscal",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fombuena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fonz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Foradada del Toscar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Formiche Alto",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fortanete",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Foz-Calanda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fraga",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fréscano",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Frías de Albarracín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuendejalón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuendetodos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuenferrada",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuentes Calientes",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuentes Claras",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuentes de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuentes de Jiloca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuentes de Rubielos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fuentespalda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Fórnoles",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Gallur",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Gea de Albarracín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Gelsa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Gistaín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Godojos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Gotor",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Graus",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Grañén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Griegos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Grisel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Grisén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Guadalaviar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Gurrea de Gállego",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Gúdar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Herrera de los Navarros",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Hoz de Jaca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Hoz y Costean",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Huerto",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Huesa del Común",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Huesca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Híjar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ibdes",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ibieca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Igriés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ilche",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Illueca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Isuerre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Isábena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jabaloyas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jaca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jaraba",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jarque",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jarque de la Val",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jasa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jatiel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jaulín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Jorcas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Josa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Almunia de Doña Godina",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Cañada de Verich",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Cerollera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Codoñera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Fresneda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Fueva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Ginebrosa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Iglesuela del Cid",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La JoyosaJ",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Muela",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Portellada",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Puebla de Alfindén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Puebla de Castro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Puebla de Híjar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Puebla de Valverde",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Sotonera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Vilueña",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, La Zaida",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Labuerda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lagata",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Laluenga",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lalueza",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lanaja",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Laperdiguera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Las Parras de Castellote",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Las Pedrosas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Las Peñas de Riglos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lascellas-Ponzano",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lascuarre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Laspaúles",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Laspuña",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Layana",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Leciñena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Letux",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Libros",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Linares de Mora",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Litago",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lledó",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Loarre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lobera de Onsella",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Longares",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Longás",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Loporzano",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Los Fayos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Los Olmos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Los Pintanos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Loscorrales",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Loscos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lucena de Jalón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Luceni",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lumpiaque",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Luna",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lupiñén-Ortilla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Lécera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Maella",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Magallón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mallén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Maluenda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Malón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Manchones",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Manzanera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mara",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Marracos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Martín del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, María de Huerva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mas de las Matas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mazaleón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mediana de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mequinenza",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mesones de Isuela",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mezalocha",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mezquita de Jarque",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mianos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Miedes de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mirambel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Miravete de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Monegrillo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Moneva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Monflorite-Lascasas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Monreal del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Monroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Montalbán",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Montanuy",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Monterde de Albarracín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Montón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Monzón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mora de Rubielos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Morata de Jalón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Morata de Jiloca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Moros",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Morés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mosqueruela",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Moyuela",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Mozota",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Muel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Muniesa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Munébrega",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Murillo de Gállego",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Naval",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Navardún",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Noguera de Albarracín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Nogueras",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Nogueruelas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Nonaspe",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Novales",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Novallas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Novillas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Nueno",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Nuez de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Nuévalos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Odón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ojos Negros",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Olba",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Oliete",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Olvena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Olvés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ontiñena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Orihuela del Tremedal",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Orrios",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Osera de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Osso de Cinca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Palo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pancrudo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Paniza",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Panticosa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Paracuellos de Jiloca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Paracuellos de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pastriz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pedrola",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Peralejos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Perales del Alfambra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Peralta de Alcofea",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Peralta de Calasanz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Peraltilla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Perarrúa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Perdiguera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pertusa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Peñalba",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Peñarroya de Tastavins",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Piedratajada",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pina de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pinseque",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Piracés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Plan",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Plasencia de Jalón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pleitas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Plenas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Poleñino",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pomer",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pozondón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pozuelo de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pozán de Vero",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pradilla de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Puebla de Albortón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Puendeluna",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Puente La Reina de Jaca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Puente de Montañana",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Puertomingalvo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Pueyo de Santa Cruz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Puértolas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Quicena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Quinto",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Remolinos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Retascón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ricla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Rillo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Riodeva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Robres",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Romanos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Royuela",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Rubiales",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Rubielos de Mora",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Rubielos de la Cérida",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Rueda de Jalón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ráfales",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Ródenas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sabiñán",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sabiñánigo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sahún",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Salas Altas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Salas Bajas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Saldón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Salillas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Salillas de Jalón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sallent de Gállego",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Salvatierra de Esca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Samper de Calanda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Samper del Salz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, San Agustín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, San Esteban de Litera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, San Juan de Plan",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, San Martín de la Virgen de Moncayo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, San Martín del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, San Mateo de Gállego",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, San Miguel del Cinca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sangarrén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santa Cilia",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santa Cruz de Grío",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santa Cruz de Moncayo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santa Cruz de la Serós",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santa Eulalia",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santa Eulalia de Gállego",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santa María de Dulcis",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santaliestra y San Quílez",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Santed",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sariñena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sarrión",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Secastilla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sediles",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Seira",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Senés de Alcubierre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sestrica",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sesué",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sierra de Luna",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sigüés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Singra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Siétamo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sobradiel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sopeira",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sos del Rey Católico",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sádaba",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Sástago",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tabuenca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Talamantes",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tamarite de Litera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tarazona",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tardienta",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tauste",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tella-Sin",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Terrer",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Terriente",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Teruel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tierga",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tierz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tobed",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tolva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Toril y Masegoso",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tormón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tornos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torralba de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torralba de Ribota",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torralba de los Sisones",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torre de Arcas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torre de las Arcas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torre del Compte",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torre la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torre los Negros",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrecilla de Alcañiz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrecilla del Rebollar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrelacárcel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrelapaja",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrellas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrente de Cinca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torres de Albarracín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torres de Alcanadre",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torres de Berrellén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrevelilla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrijas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrijo de la Cañada",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Torrijo del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tosos",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tramacastiel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tramacastilla",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tramaced",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Trasobares",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Tronchón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Uncastillo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Undués de Lerda",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Urrea de Gaén",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Urrea de Jalón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Urriés",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Used",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Utebo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Utrillas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valacloche",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valbona",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valdealgorfa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valdecuenca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valdelinares",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valdeltormo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valderrobres",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valfarta",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valjunquera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valle de Hecho",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valle de Lierp",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valmadrid",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valpalmas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Valtorres",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Veguillas de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Velilla de Cinca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Velilla de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Velilla de Jiloca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Vencillón",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Vera de Moncayo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Veracruz",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Vicién",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Vierlas",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villafeliche",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villafranca de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villafranca del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villahermosa del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villalba de Perejil",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villalengua",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villanova",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villanueva de Gállego",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villanueva de Huerva",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villanueva de Jiloca",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villanueva de Sigena",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villanueva del Rebollar de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villanúa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villar de los Navarros",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villar del Cobo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villarluengo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villarquemado",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villarroya de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villarroya de los Pinares",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villarroya del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villastar",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Villel",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Vinaceite",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Visiedo",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Vistabella",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Vivel del Río Martín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Yebra de Basa",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Yésero",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Zaidín",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Zaragoza",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Zaragoza, Actur Rey Fernando",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Alfocea",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Casablanca",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Casco Histórico",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Casetas",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Centro",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Delicias",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Distrito Sur",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, El Rabal",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Garrapinillos",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Juslibol-El Zorongo",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, La Almozara",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, La Cartuja Baja",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Miralbueno",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Montañana",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Monzalbarba",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Movera",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Oliver-Valdefierro",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Peñaflor",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Romareda/Universidad",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, San Gregorio",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, San José",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, San Juan De Mozarrifar",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Santa Isabel",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Torrercilla De Valmadrid",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Torrero-La Paz",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Venta Del Olivar",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zaragoza, Villarrapa",
    badge: "Barrio",
  },
  {
    Merged: "Aragón, Zuera",
    badge: "Ciudad",
  },
  {
    Merged: "Aragón, Épila",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria",
    badge: "Comunidad",
  },
  {
    Merged: "Cantabria, Alfoz de Lloredo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Ampuero",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Anievas",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Arenas de Iguña",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Argoños",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Arnuero",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Arredondo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Bareyo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Bárcena de Cicero",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Bárcena de Pie de Concha",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Cabezón de Liébana",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Cabezón de la Sal",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Cabuérniga",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Camaleño",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Camargo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Campoo de Enmedio",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Campoo de Yuso",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Cartes",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Castañeda",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Castro-Urdiales",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Cieza",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Cillorigo de Liébana",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Colindres",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Comillas",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Corvera de Toranzo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, El Astillero",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Entrambasaguas",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Escalante",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Guriezo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Hazas de Cesto",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Hermandad de Campoo de Suso",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Herrerías",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Lamasón",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Laredo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Las Rozas de Valdearroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Liendo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Limpias",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Liérganes",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Los Corrales de Buelna",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Los Tojos",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Luena",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Marina de Cudeyo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Mazcuerras",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Medio Cudeyo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Meruelo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Miengo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Miera",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Molledo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Noja",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Penagos",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Pesaguero",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Pesquera",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Peñarrubia",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Piélagos",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Polaciones",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Polanco",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Potes",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Puente Viesgo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Ramales de la Victoria",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Rasines",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Reinosa",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Reocín",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Ribamontán al Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Ribamontán al Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Rionansa",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Riotuerto",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Ruente",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Ruesga",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Ruiloba",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, San Felices de Buelna",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, San Miguel de Aguayo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, San Pedro del Romeral",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, San Roque de Riomiera",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, San Vicente de la Barquera",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Santa Cruz de Bezana",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Santa María de Cayón",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Santander",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Santander, Alisal - Cazoña - San Román",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Castilla - Hermida",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Centro - Ayuntamiento",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Cuatro Caminos",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Cueto",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, El Sardinero",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, General Dávila",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, La Pereda",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Los Castros",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Monte",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Numancia - San Fernando",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Peñacastillo - Nuevamontaña",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Puerto Chico",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santander, Valdenoja",
    badge: "Barrio",
  },
  {
    Merged: "Cantabria, Santillana del Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Santiurde de Reinosa",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Santiurde de Toranzo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Santoña",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Saro",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Selaya",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Soba",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Solórzano",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Suances",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Torrelavega",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Tudanca",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Udías",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Val de San Vicente",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Valdeolea",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Valdeprado del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Valderredible",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Valdáliga",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Vega de Liébana",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Vega de Pas",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Villacarriedo",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Villaescusa",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Villafufre",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Villaverde de Trucíos",
    badge: "Ciudad",
  },
  {
    Merged: "Cantabria, Voto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León",
    badge: "Comunidad",
  },
  {
    Merged: "Castilla y León, Abades",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Abajas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Abarca de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Abejar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Abia de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Abusejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Acebedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Adalia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Adanero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Adrada de Haza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Adrada de Pirón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Adradas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Adrados",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Agallas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aguas Cándidas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aguasal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aguilafuente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aguilar de Campoo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ahigal de los Aceiteros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alaejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alar del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alaraz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alba de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alba de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alba de Yeltes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Albillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Albornos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alcazarén",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alcañices",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alcocero de Mola",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alconaba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alconada de Maderuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alcubilla de Nogales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldea Real",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldea de San Miguel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldea del Obispo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeacipreste",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeadávila de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldealcorvo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldealengua",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldealengua de Pedraza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldealengua de Santa María",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldealseñor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeamayor de San Martín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeanueva de Figueroa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeanueva de Santa Cruz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeanueva de la Serrezuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeanueva de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldearrodrigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldearrubia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeaseca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeaseca de Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeaseca de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeasoña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeatejada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldeavieja de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldehuela de Yeltes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aldehuela de la Bóveda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alentisque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alfaraz de Sayago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alfoz de Bricia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alfoz de Quintanadueñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alfoz de Santa Gadea",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Algadefe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Algodre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Alija del Infantado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almajano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almaluez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almanza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almarza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almazán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almeida de Sayago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almenar de Soria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almenara de Adaja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almenara de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Almendra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Altable",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Amavida",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Amayuelas de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ameyugo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ampudia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Amusco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Amusquillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Anaya de Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Andavías",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Anguix",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Antigüedad",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arabayona de Mógica",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arahuetes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aranda de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arandilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arapiles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arauzo de Miel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arcenillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arconada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arcones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arcos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arcos de Jalón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arcos de la Polvorosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ardón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arenas de San Pedro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arenillas de Riopisuerga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arevalillo de Cega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arganza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Argañín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Argujillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arija",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arlanzón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Armenteros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Armuña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arquillinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arrabalde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arraya de Oca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arroyo de la Encomienda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arévalo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Arévalo de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aspariegos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Astorga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Astudillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Atapuerca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ataquines",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Autilla del Pino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Autillo de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Aveinte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Avellaneda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ayllón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ayoó de Vidriales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Añe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Añover de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Babilafuente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bahabón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bahabón de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Balboa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Baltanás",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Baraona",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barbadillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barbadillo de Herreros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barbadillo del Mercado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barbadillo del Pez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barbalos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barbolla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barcial de la Loma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barjas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barrio de Muñó",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barrios de Colina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barromán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barruecopardo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barruelo de Santullán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Barruelo del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Basardilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Basconcillos del Tozo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bascuñana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bañobárez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Baños de Valdearados",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bañuelos de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Becedas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Becedillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Becerril de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Becilla de Valderaduey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Beleña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Belorado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bembibre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Benavente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Benavides",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Benegiles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Benuza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Berberana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bercero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bercial",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bercial de Zapardiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bercianos del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bercianos del Real Camino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bercimuel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Berlanga de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Berlangas de Roa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bermillo de Sayago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bernardos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bernuy de Porreros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bernuy-Zapardiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Berrocal de Salvatierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Berrocalejo de Aragona",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Berrueces",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Berzosilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Blacos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Blascomillán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Blascosancho",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Boada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Boadilla de Rioseco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Boadilla del Camino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bobadilla del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Boca de Huérgano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Boceguillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bocigas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bocos de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Boecillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bogajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bohoyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bolaños de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bonilla de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Borrenes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bozoó",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Boñar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Brabos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Brazacorta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Brazuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Brañosera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bretó",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Brieva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Brime de Sog",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Briviesca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Buenamadre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Buenavista",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Buenavista de Valdavia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bugedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Buitrago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bularros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Buniel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Burganes de Valverde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Burgo de Osma-Ciudad de Osma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Burgohondo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Burgos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Burón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bustillo de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bustillo del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Busto de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Bárcena de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Báscones de Ojeda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Caballar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabañas Raras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabañas de Polendos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabañas de Sayago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabañes de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabezabellosa de la Calzada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabezas de Alambre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabezas del Pozo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabezas del Villar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabezuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabezón de Pisuerga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabezón de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabizuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabrejas del Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabrerizos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabreros del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabreros del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabrillanes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cabrillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cacabelos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calabazas de Fuentidueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calahorra de Boedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calatañazor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Caleruega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Caltojar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calvarrasa de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calvarrasa de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calzada de Don Diego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calzada de Valdunciel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calzada de los Molinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calzada del Coto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Calzadilla de Tera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Camarzana de Tera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Campaspero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Campazas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Campo de San Pedro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Campo de Villavidel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Campolara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Camponaraya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Camporredondo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Canalejas de Peñafiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Candelario",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Candeleda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Candilichera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Candín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Canicosa de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Canillas de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Canillas de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cantagallo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cantalapiedra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cantalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cantalpino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cantaracillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cantimpalos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cantiveros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Capillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carazo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carbajales de Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carbajosa de la Sagrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carbellino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carbonero el Mayor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carcedo de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carcedo de Burgos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cardeñadijo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cardeñajimeno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cardeñosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cardeñuela Riopico",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carpio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carpio de Azaba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carracedelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carrascal de Barregas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carrascal del Obispo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carrias",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carrizo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carrión de los Condes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carrocera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Carucedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casafranca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casarejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casas del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casaseca de Campeán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casaseca de las Chanas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casasola",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casasola de Arión",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casavieja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cascajares de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cascajares de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casillas de Flores",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Casla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castellanos de Moriscos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castellanos de Villiquera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castellanos de Zapardiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castil de Peones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castildelgado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castilfalé",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castilfrío de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castillejo de Martín Viejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castillejo de Mesleón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castillejo de Robledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castilruiz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrejón de Trabancos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrejón de la Peña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo Matajudíos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo de Don Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo de Villavega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo de la Guareña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo de la Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo de la Valduerna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo del Val",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrillo-Tejeriego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrocalbón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrocontrigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrodeza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrogonzalo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrojeriz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrojimeno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castromocho",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castromonte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castronuevo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castronuevo de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castronuño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castropodame",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castroponce",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castroserna de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castroserracín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castrotierra de Valmadrigal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Castroverde de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cavia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cayuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cazurra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cañizal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cañizo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cea",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cebanico",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cebreros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cebrones del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cedillo de la Torre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ceinos de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Celada del Camino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cepeda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cepeda la Mora",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cereceda de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cerecinos de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cerecinos del Carrizal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cerezal de Peñahorcada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cerezo de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cerezo de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cerezo de Río Tirón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cernadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cerratón de Juarros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cervatos de la Cueza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cervera de Pisuerga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cespedosa de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cevico de la Torre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Chamartín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Chañe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Chozas de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ciadoncha",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cidones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cigales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ciguñuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cillaperlata",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cilleros de la Bastida",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cilleruelo de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cilleruelo de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cillán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cimanes de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cimanes del Tejar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cipérez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ciria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ciruelos de Cervera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cisla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cisneros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cistierna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cistérniga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ciudad Rodrigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cobos de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cobos de Fuentidueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cobreros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Coca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Coca de Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Codorniz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cogeces de Íscar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cogeces del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cogollos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Collado Hermoso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Collado de Contreras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Collado del Mirón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Collazos de Boedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Colmenar de Montemayor",
    badge: "Ciudad",
  },
  {
    Merged:
      "Castilla y León, Comunidad de Castrillo de la Reina, Hacinas y Salas de los Infantes",
    badge: "Ciudad",
  },
  {
    Merged:
      "Castilla y León, Comunidad de Hortigüela, Jurisdicción de Lara y Mambrillas de Lara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Común de Riaza y Sepúlveda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Condado de Castilnovo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Condado de Treviño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Congosto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Congosto de Valdavia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Contreras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Coomonte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Corbillos de los Oteros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Corcos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cordovilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cordovilla la Real",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Coreses",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Corral de Ayllón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Corrales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Corullón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Coruña del Conde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Coscurita",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Covaleda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Covarrubias",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cozuelos de Fuentidueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Crespos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Crémenes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cuadros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubillas de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubillas de Rueda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubillas de Santa Marta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubillas de los Oteros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubillo del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubillos del Sil",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubo de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cubo de la Solana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cuenca de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cuevas de San Clemente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cuevas del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Curiel de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cuéllar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Cármenes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Dehesa de Montejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Dehesa de Romanos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Destriana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Deza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Domingo García",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Donhierro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Donjimeno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Doñinos de Ledesma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Doñinos de Salamanca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Dueñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Duruelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Dévanos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ejeme",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Arco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Arenal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Barco de Ávila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Barraco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Bodón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Bohodón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Burgo Ranero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Cabaco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Campillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Campo de Peñaranda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Cerro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Cubo de Tierra del Vino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Espinar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Fresno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Hornillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Hoyo de Pinares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Losar del Barco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Maderal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Manzano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Maíllo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Milano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Parral",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Payo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Pedroso de la Armuña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Pego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Perdigón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Pino de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Piñero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Royo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Tejado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Tiemblo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, El Tornadizo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encina de San Silvestre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encinas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encinas de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encinas de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encinas de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encinasola de los Comendadores",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encinedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encinillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Encío",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Endrinal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Entrala",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Escalona del Prado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Escarabajosa de Cabezas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Escobar de Polendos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Escurial de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Esguevillas de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espeja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espeja de San Marcelino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espino de la Orbada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espinosa de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espinosa de Cervera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espinosa de Villagonzalo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espinosa de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espinosa de los Monteros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espinosa del Camino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Espirdo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Estépar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fabero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Faramontanos de Tábara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fariza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fermoselle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ferreras de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Figueruela de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Flores de Ávila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Florida de Liébana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Folgoso de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fonfría",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fontihoyuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fontioso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fontiveros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Forfoleda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Frades de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Frandovínez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Frechilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Frechilla de Almazán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresneda de Cuéllar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresneda de la Sierra Tirón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresnedilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresnedoso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresneña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresnillo de las Dueñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresno Alhándiga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresno de Cantespino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresno de Río Tirón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresno de la Fuente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresno de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresno de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresno del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fresno el Viejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Friera de Valverde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Frumales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Frías",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Frómista",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuensaldaña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuente de Santa Cruz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuente el Saúz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuente el Sol",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuente-Olmedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentebureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentecantos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentecén",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuenteguinaldo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentelapeña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentelcésped",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuenteliante",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentelisendo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentemolinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentenebro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentepelayo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentepinilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuenterrebollo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuenterroble de Salvatierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentes de Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentes de Carbajal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentes de Magaña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentes de Nava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentes de Oñoro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentes de Ropel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentes de Valdepero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentesaúco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentesaúco de Fuentidueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentesoto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentespina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentespreadas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Fuentidueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gajates",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Galende",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Galindo y Perahuy",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Galinduste",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Galisancho",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gallegos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gallegos de Argañán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gallegos de Hornija",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gallegos de Sobrinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gallegos de Solmirón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Garcibuey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Garcihernández",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Garcillán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Garcirrey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Garganta del Villar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Garrafe de Torío",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Garray",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gatón de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gavilanes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gema",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gemuño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Geria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gil García",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gilbuena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gimialcón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Golmayo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Golpejas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gomecello",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gomezserracín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gordaliza del Pino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gordoncillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gormaz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gotarrendura",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gradefes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Grajal de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Grajera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Granja de Moreruela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Granucillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Grijalba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Grijota",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Grisaleña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Guadramiro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Guardo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Guarrate",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Guaza de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Guijuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Guisando",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gumiel de Izán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gumiel de Mercado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gusendos de los Oteros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gutierre-Muñoz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Gómara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hacinas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Haza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Herguijuela de Ciudad Rodrigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Herguijuela de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Herguijuela del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hernansancho",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Herradón de Pinares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Herrera de Pisuerga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Herrera de Valdecañas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Herrín de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Higuera de las Dueñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hinojosa de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Honrubia de la Cuesta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hontalbilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hontanares de Eresma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hontangas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hontoria de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hontoria de Valdearados",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hontoria de la Cantera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hontoria del Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Horcajo Medianero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Horcajo de Montemayor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Horcajo de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hornillos de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hornillos de Eresma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hortigüela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hospital de Órbigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hoyales de Roa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hoyocasero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hoyos del Collado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hoyos del Espino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Huerta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Huerta de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Huerta de Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Humada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hurones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hurtumpascual",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Husillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Huérmeces",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Hérmedes de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ibeas de Juarros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ibrillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Iglesiarrubia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Iglesias",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Igüeña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Iruelos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Isar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Itero del Castillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ituero de Azaba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ituero y Lama",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Izagre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Jambrina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Jaramillo Quemado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Jaramillo de la Fuente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Joarilla de las Matas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Juarros de Voltoya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Junciana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Junta de Traslaloma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Junta de Villalba de Losa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Jurisdicción de San Zadornil",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Justel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Juzbado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Adrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Alamedilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Alberca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Alberguería de Argañán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Aldehuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Antigua",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Bastida",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Bañeza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Bóveda de Toro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Cabeza de Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Calzada de Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Carrera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Colilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Cueva de Roa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Encina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Ercina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Fregeneda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Fuente de San Esteban",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Gallega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Hija de Dios",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Hiniesta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Horcajada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Horra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Hoya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Lastrilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Losa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Losilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Matilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Maya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Mudarra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Orbada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Parrilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Pedraja de Portillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Pernía",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Peña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Pola de Gordón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Puebla de Arganzón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Puebla de Valdavia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Revilla y Ahedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Rinconada de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Robla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Sagrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Seca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Sequera de Haza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Serna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Serrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Sierpe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Tala",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Torre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Torre del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Unión de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Vecilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Vellés",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Vid de Ojeda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Vid y Barrios",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Zarza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, La Zarza de Pumareda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Labajos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lagartos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Laguna Dalga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Laguna de Contreras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Laguna de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Laguna de Negrillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lagunilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Langa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Langa de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Languilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lantadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lanzahíta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Larrodrigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Las Berlanas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Las Casas del Conde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Las Hormazas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Las Navas del Marqués",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Las Omañas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Las Quintanillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Las Veguillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lastras de Cuéllar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lastras del Pozo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ledesma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ledigos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ledrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lerma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, León",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Linares de Riofrío",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Llamas de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Loma de Ucieza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lomas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Altos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Ausines",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Balbases",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Barrios de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Barrios de Luna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Huertos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Llanos de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Rábanos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Los Santos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Losacio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lubián",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lucillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Luelmo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Lumbrales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Luyego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Machacón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Macotera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Maderuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Madridanos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Madrigal de las Altas Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Madrigal del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Madrigalejo del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Madroñal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Maello",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Magaz de Cepeda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Magaz de Pisuerga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Magaña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mahamud",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Maire de Castroponce",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Malpartida de Corneja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Malva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mamblas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mambrilla de Castrejón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mambrillas de Lara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mamolar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mancera de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mancera de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Manganeses de la Lampreana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Manganeses de la Polvorosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Manquillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mansilla Mayor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mansilla de las Mulas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mantinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Manzanal de los Infantes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Manzanal del Barco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Manzanillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Marazoleja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Marazuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Maraña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Marcilla de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Martiherrero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Martinamor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Martín Miguel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Martín Muñoz de la Dehesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Martín Muñoz de las Posadas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Martín de Yeltes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Martínez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Marugán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Marzales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mata de Cuéllar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matabuena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matallana de Torío",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matamala de Almazán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matanza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matapozuelos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matilla de Arzón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matilla de los Caños",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matilla de los Caños del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Matilla la Seca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mayalde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mayorga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mazariegos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mazuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mecerreyes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mediana de Voltoya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Medina de Pomar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Medina de Rioseco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Medina del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Medinaceli",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Medinilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Megeces",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Melgar de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Melgar de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Melgar de Fernamental",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Melgar de Tera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Melgar de Yuso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Melque de Cercos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Membribe de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Meneses de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mengamuñoz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Merindad de Cuesta-Urria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Merindad de Montija",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Merindad de Río Ubierna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Merindad de Sotoscueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Merindad de Valdeporres",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Merindad de Valdivielso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mesegar de Corneja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Micereces de Tera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Migueláñez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mijares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Milagros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Milles de la Polvorosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mingorría",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Miranda de Azán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Miranda de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Miranda del Castañar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Miraveche",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mironcillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mirueña de los Infanzones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Miño de Medinaceli",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Modúbar de la Emparedada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mogarraz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mojados",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Molacillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Molinaseca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Molinos de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mombeltrán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monasterio de Rodilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monasterio de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moncalvillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monfarracinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monforte de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monsalupe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montamarta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monteagudo de las Vicarías",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montealegre de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montejo de Arévalo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montejo de Tiermes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montejo de la Vega de la Serrezuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montemayor de Pililla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montemayor del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montenegro de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monterrubio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monterrubio de Armuña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monterrubio de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Montorio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Monzón de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moral de Hornuez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moral de Sayago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moral de la Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moraleja del Vino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Morales de Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Morales de Toro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Morales de Valverde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Morales del Vino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moralina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Morasverdes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moreruela de Tábara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moreruela de los Infanzones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Morille",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moriscos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moronta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Moríñigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Morón de Almazán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mota del Marqués",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mozoncillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mozárbez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mucientes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Mudá",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muelas de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muelas del Pan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muga de Sayago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Murias de Paredes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muriel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muñana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muñico",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muñogalindo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muñopedro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muñopepe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muñosancho",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muñotello",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Muñoveros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nafría de Ucero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Narrillos del Álamo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Narros de Matalayegua",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Narros de Saldueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nava de Arévalo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nava de Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nava de Francia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nava de Roa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nava de la Asunción",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nava del Barco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nava del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navacarros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navacepedilla de Corneja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navaescurial",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navafría",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navahondilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalacruz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navaleno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalmanzano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalmoral",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalmoral de Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalonguilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalperal de Pinares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navalperal de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navaluenga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navamorales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navares de Ayuso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navares de Enmedio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navares de las Cuevas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navarredonda de Gredos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navarredonda de la Rinconada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navarredondilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navarrevisca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navas de Oro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navas de Riofrío",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navas de San Antonio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navasfrías",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navatalgordo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Navatejares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Negrilla de Palencia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Neila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Neila de San Miguel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nieva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Niharra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Noceda del Bierzo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Nueva Villa de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Oencia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Olea de Boedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Olivares de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Olmedillo de Roa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Olmedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Olmillos de Castro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Olmos de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Olmos de Ojeda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Olombrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Oncala",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Onzonilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Orbaneja Riopico",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Orbita",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Orejana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ortigosa de Pestaño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ortigosa del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Oseja de Sajambre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Osorno la Mayor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Otero de Bodas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Otero de Herreros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Oña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Padiernos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Padilla de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pajares de Adaja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pajares de la Laguna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pajares de la Lampreana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pajares de los Oteros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palacios de Goda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palacios de Sanabria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palacios de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palacios de la Valduerna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palacios del Arzobispo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palacios del Pan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palacios del Sil",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palaciosrubios",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palazuelo de Vedija",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palazuelos de Eresma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palazuelos de Muñó",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palencia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palencia de Negrilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Palenzuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pampliega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pancorbo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Papatrigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Parada de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Parada de Rubiales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Paradinas de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pardilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Paredes de Nava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Partido de la Sierra en Tobalina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pastores",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrajas de San Esteban",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedralba de la Pradería",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedraza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedraza de Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedraza de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedro Bernardo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedro-Rodríguez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrosa de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrosa de Río Úrbel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrosa de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrosa del Príncipe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrosa del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrosillo de Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrosillo de los Aires",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pedrosillo el Ralo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peguerinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pelabravo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pelayos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pelayos del Arroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peleagonzalo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peleas de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peralejos de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peralejos de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Perales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peranzanes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pereruela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pereña de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Perilla de Castro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peromingo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pesquera de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peñacaballera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peñafiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peñalba de Ávila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peñaparda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peñaranda de Bracamonte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peñaranda de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Peñarandilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Piedrahita de Castro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Piedrahíta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Piedralaves",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pinarejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pinarnegrillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pineda Trasmonte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pineda de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pinilla de Toro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pinilla de los Moros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pino del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pitiegua",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pizarral",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Piérnigas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Piña de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Piña de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Piñel de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Población de Arroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Población de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Población de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pobladura de Pelayo García",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pobladura de Valderaduey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pobladura del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Polentinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pollos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pomar de Valdivia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ponferrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Portillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Porto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Posada de Valdeón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Poveda de las Cintas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Poyales del Hoyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Poza de la Sal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Poza de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pozal de Gallinas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pozaldez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pozanco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pozoantiguo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pozos de Hinojo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pozuelo de Tábara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pozuelo de la Orden",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pozuelo del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pradales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Prado de la Guzpeña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pradoluengo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pradosegar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Presencio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Priaranza del Bierzo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Prioro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Prádanos de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Prádanos de Ojeda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Prádena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puebla de Azaba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puebla de Lillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puebla de Pedraza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puebla de Sanabria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puebla de Yeltes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Pueblica de Valverde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puente de Domingo Flórez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puente del Congosto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puentedura",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puerto Castilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Puerto de Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Páramo de Boedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Páramo del Sil",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quemada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintana Redonda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintana del Castillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintana del Marco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintana del Pidio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintana del Puente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanaortuño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanapalla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanar de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanas de Gormaz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanavides",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanaélez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla San García",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla Vivar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla de Onsoña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla de Onésimo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla de Trigueros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla de Urz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla de la Mata",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla del Agua y Tordueles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quintanilla del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Quiruelas de Vidriales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rabanales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rabé de las Calzadas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rapariegos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rasueros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rebollar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rebolledo de la Torre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rebollo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Recuerda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Redecilla del Camino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Redecilla del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Regueras de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Regumiel de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Reinoso de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Remondo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Renedo de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Renedo de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Renieblas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Requejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Requena de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Respenda de la Peña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Retortillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Retortillo de Soria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Retuerta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Revellinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Revenga de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Revilla de Collazos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Revillarruz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Reyero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Riaza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Riaño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ribas de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ribota",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Riego de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Riello",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Riocabado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Riocavado de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Riofrío",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Riofrío de Riaza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rionegro del Puente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rioseco de Soria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rioseco de Tapia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Roa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Roales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Roales de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Robleda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Robleda-Cervantes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Roda de Eresma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Roelos de Sayago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rojas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rollamienta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rollán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Roperuelos del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Roturas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Royuela de Río Franco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rubena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rublacedo de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rucandio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rueda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rábano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Rágama",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sabero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sacramenia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Saelices de Mayorga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sahagún",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salamanca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salas de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salas de los Infantes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Saldaña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Saldaña de Burgos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salinas de Pisuerga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salinillas de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salmoral",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salobral",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salvadiós",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salvador de Zapardiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Salvatierra de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Samboal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Adrián de Juarros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Adrián del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Andrés del Rabanedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Bartolomé de Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Bartolomé de Corneja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Bartolomé de Pinares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cebrián de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cebrián de Castro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cebrián de Mazote",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cebrián de Mudá",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cristóbal de Cuéllar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cristóbal de Entreviñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cristóbal de Segovia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cristóbal de la Cuesta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cristóbal de la Polantera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Cristóbal de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Emiliano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Esteban de Gormaz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Esteban de Nogales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Esteban de Zapardiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Esteban de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Esteban de los Patos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Esteban del Molar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Esteban del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Felices",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Felices de los Gallegos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Ildefonso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Juan de Gredos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Juan de la Encinilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Juan de la Nava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Juan del Molinillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Juan del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Justo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Justo de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Leonardo de Yagüe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Lorenzo de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Mamés de Burgos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Mamés de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Martín de Rubiales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Martín de Valderaduey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Martín de Valvení",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Martín de la Vega del Alberche",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Martín del Castañar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Martín del Pimpollar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Miguel de Bernuy",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Miguel de Corneja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Miguel de Valero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Miguel de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Miguel del Arroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Miguel del Pino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Miguel del Robledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Miguel del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Millán de Lara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Millán de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Morales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pascual",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro Bercianos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro Manrique",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro de Ceque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro de Gaíllos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro de Latarce",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro de Rozados",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro de la Nave-Almendra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro del Arroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pedro del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pelayo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Pelayo de Guareña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Román de Hornija",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Vicente de la Cabeza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, San Vicente del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sancedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sanchidrián",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sanchonuño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sanchorreja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sanchotello",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sanchón de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sancti-Spíritus",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sando",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sangarcía",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cecilia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cecilia del Alcor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Clara de Avedillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Colomba de Curueño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Colomba de Somoza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cristina de Valmadrigal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cristina de la Polvorosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Croya de Tera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cruz de Boedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cruz de Pinares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cruz de la Salceda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cruz del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Cruz del Valle Urbión",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Elena de Jamuz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Eufemia del Arroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Gadea del Cid",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Inés",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Marina del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Marta de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Marta del Cerro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María Rivarredonda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María de Huerta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María de Ordás",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María de Sando",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María de la Isla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María de las Hoyas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Arroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Berrocal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Cubillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Invierno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Mercadillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Monte de Cea",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María del Tiétar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa María la Real de Nieva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santa Olalla de Bureba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santas Martas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santervás de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santervás de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santiago Millas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santiago de la Puebla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santiago del Collado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santiago del Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santibáñez de Béjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santibáñez de Ecla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santibáñez de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santibáñez de Tera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santibáñez de Valcorba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santibáñez de Vidriales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santibáñez de la Peña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santibáñez de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santiuste de Pedraza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santiuste de San Juan Bautista",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santiz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santo Domingo de Pirón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santo Domingo de Silos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santo Domingo de las Posadas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santo Tomé de Zabarcos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santo Tomé del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santovenia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santovenia de Pisuerga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santovenia de la Valdoncina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Santoyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sanzoles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sardón de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sargentes de la Lora",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sariegos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sarracín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sasamón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Saucelle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sauquillo de Cabezas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sebúlcor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Segovia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sena de Luna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sepúlveda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sequera de Fresno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sequeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Serrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Serradilla del Arroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Serradilla del Llano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Siete Iglesias de Trabancos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sieteiglesias de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Simancas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sinlabajos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sobradillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sobrado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Solana de Ávila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Solarana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Soliedra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Solosancho",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Soria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sorihuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotalbo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotillo de la Adrada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotillo de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotillo del Rincón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Soto de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Soto de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Soto y Amío",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotobañado y Priorato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotosalbos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotoserrano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotragero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Sotresgudo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Suellacabras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tabanera de Valdavia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tabanera la Luenga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tajueco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Talveila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tamames",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tapioles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tarazona de Guareña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tardajos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tardelcuende",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tardáguila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tariego de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tenebrón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Terradillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Terradillos de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tiedra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tiñosillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tobar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tolbaños",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tolocirio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Topas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Toral de los Guzmanes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tordehumos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tordesillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tordillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tordómar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Toreno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tormellas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tornadizos de Ávila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Toro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torquemada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torre Val de San Pedro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torre de Peñafiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torre del Bierzo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torreblacos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torrecaballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torrecilla de la Abadesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torrecilla de la Orden",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torrecilla del Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torregalindo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torregamones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torreiglesias",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torrelobatón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torremormojón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torres del Carrizal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torresandino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torrescárcela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Torresmenudas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Trabadelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Trabazos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Traspinedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Trefacio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Trescasas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Trespaderne",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Trigueros del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Triollo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Truchas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tubilla del Agua",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tubilla del Lago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tudela de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Turcia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Turégano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tábara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Támara de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tórtoles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Tórtoles de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ucero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Umbrías",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Urdiales del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Urueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Urueñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vadillo de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vadocondes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Val de San Lorenzo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valbuena de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valcabado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valde-Ucieza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdeande",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdearcos de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdeavellano de Tera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdecarros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdefinjas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdefresno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdefuentes de Sangusín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdefuentes del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdegeña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdelacasa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdelosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdelugueros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdemaluque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdemierque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdemora",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdenebro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdeolmillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdepiélago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdepolo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdeprados",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valderas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valderrey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valderrueda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valderrábano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdesamario",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdescorriel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdestillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdevacas y Guijar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdevimbre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdezate",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdorros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdunciel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valdunquillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valencia de Don Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valladolid",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valladolid, Arturo Eyries",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Barrio España",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Batallas",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Belen - Pilarica",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Campo Grande",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Caño Argales",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Circular",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Covaresa",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Cuatro De Marzo",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Delicias - Arco De Ladrillo",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Delicias - Canterac",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, El Berrocal",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, El Pinar",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Extrarradio",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Giron",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Hospital",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Huerta Del Rey",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, La Antigua - Santa Cruz",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, La Farola",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, La Overuela",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, La Rubia",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, La Victoria",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Las Flores",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Las Villas - Valparaiso",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Pajarillos Altos",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Pajarillos Bajos",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Parque Alameda - Paula Lopez",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Parquesol",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Pilarica - Los Santos",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Plaza De Toros",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Plaza España",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Plaza Mayor",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Poligono Argales",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Poligono San Cristobal",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Puente Duero",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Rondilla",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, San Isidro",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, San Martin",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, San Pablo - San Nicolas",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, San Pedro Regalado",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Soto De Medinilla",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valladolid, Vadillos",
    badge: "Barrio",
  },
  {
    Merged: "Castilla y León, Valle de Losa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Manzanedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Mena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Oca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Santibáñez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Sedano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Tobalina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Valdebezana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Valdelaguna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Valdelucio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de Zamanzas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle de las Navas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valle del Retortillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vallecillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vallejera de Riofrío",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vallelado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valleruela de Pedraza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vallesa de la Guareña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valluércanes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valoria la Buena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valsalabroso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valseca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valtiendas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valverde de Valdelacasa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valverde de la Virgen",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valverde del Majano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valverde-Enrique",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Valverdón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vecinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Espinareda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Infanzones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Ruiponce",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Santa María",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Tera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Tirados",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Valcarce",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Valdetronco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vega de Villalobos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vegacervera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Veganzones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vegaquemada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vegas de Matute",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vegas del Condado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Velamazán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Velascálvaro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Velayos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Velilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Velilla del Río Carrión",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Velliza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Venialbo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Venta de Baños",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ventosa del Río Almar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ventosilla y Tejadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vertavillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vezdemarbán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Viana de Cega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vidayanes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villablino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villabraz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villabrágima",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villabrázaro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villabuena del Puente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villabáñez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villacarralón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villacastín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villacid de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaciervos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villadangos del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villadecanes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villademor de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villadepera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villadiego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaeles de Valdavia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaescusa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaferrueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaflor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaflores",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villafrades de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villafranca Montes de Oca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villafranca de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villafranca del Bierzo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villafrechós",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villafruela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villafuerte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villafáfila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villagalijo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villagarcía de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villagatón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villagonzalo Pedernales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villagonzalo de Tormes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villagómez la Nueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaherreros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villahoz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villahán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalaco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalazán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalba de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalba de la Lampreana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalba de los Alcores",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalba de los Llanos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalbarba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalbilla de Burgos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalbilla de Gumiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalcampo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalcázar de Sirga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalcón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaldemiro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalmanzo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalobos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalobón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalonso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalpando",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalube",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaluenga de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villalón de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamandos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamanín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamartín de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamayor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamayor de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamayor de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamañán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamediana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamejil",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villameriel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamol",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamontán de la Valduerna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamor de los Escuderos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamoratiel de las Matas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamoronta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamuriel de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villamuriel de Cerrato",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villangómez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanubla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Argaño",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Azoague",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Campeán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Carazo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Duero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Gormaz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Gumiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Gómez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Teba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de la Condesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de las Manzanas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de las Peras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de los Infantes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva de Ávila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanueva del Conde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanuño de Valdavia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villanázar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaobispo de Otero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaornate y Castro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaprovedo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaquejida",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaquilambre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaquirán de los Infantes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar de Argañán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar de Ciervo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar de Corneja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar de Gallimazo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar de Peralonso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar de Samaniego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar de la Yegua",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar del Ala",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar del Buey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villar del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaralbo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarcayo de Merindad de Castilla la Vieja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villardeciervos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villardefrades",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villardiegua de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarejo de Órbigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarejo del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villares de Yeltes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villares de la Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villares de Órbigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villariezo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarino de los Aires",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarmayor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarmentero de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarmentero de Esgueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarrabé",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarramiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villarrín de Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villasabariego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villasandino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villasarracino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaseco de los Gamitos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaseco de los Reyes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaseco del Pan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaselán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villasila de Valdavia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villasrubias",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villasur de Herreros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villatoro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villatuelda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaturde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaturiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaumbrales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villavaquerín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villavellid",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villavendimio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaverde de Guareña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaverde de Medina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaverde de Montejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaverde de Íscar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaverde del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaverde-Mogina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaveza de Valverde",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaveza del Agua",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villavicencio de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villavieja de Yeltes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villaviudas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villayerno Morquillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villazala",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villazanzo de Valderaduey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villazopeque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villeguillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villodre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villoldo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villoria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villoruela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villota del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villovieco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Villán de Tordesillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Viloria",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Viloria de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vilvestre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vilviestre del Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vinuesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vitigudino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vizcaínos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Viñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Viñegra de Moraña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Vozmediano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Wamba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Yanguas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Yanguas de Eresma",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Yecla de Yeltes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Yelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zamayón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zamora",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zapardiel de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zarapicos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zaratán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zarzuela del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zarzuela del Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zazuar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Zotes del Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ágreda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ávila",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Íscar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Ólvega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla y León, Úrbel del Castillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha",
    badge: "Comunidad",
  },
  {
    Merged: "Castilla-La Mancha, Abengibre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Abenójar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Abia de la Obispalía",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ablanque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Agudo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ajofrín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alameda de la Sagra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alamillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alarcón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alarilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alatoz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Albacete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Albaladejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Albalate de Zorita",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Albalate de las Nogueras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Albares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Albarreal de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Albatana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Albendea",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alborea",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcabón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcadozo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcalá de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcalá del Júcar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcaraz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcaudete de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcañizo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcoba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcocer",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcolea de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcolea de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcolea de las Peñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcolea del Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alconchel de la Estrella",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcoroches",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcubillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcázar de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alcázar del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Aldea del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Aldea en Cabo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Aldeanueva de Barbarroya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Aldeanueva de San Bartolomé",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Algora",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alhambra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alhóndiga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Aliaguilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alique",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almadrones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almadén",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almagro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almansa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almedina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almendral de la Cañada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almendros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almodóvar del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almodóvar del Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almoguera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almonacid de Toledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almonacid de Zorita",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almonacid del Marquesado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almorox",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Almuradiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alocén",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alovera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alpera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Altarejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Alustante",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Anchuras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Anguita",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Aranzueque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arbancón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arbeteta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arcas del Villar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arcicóllar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arenales de San Gregorio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arenas de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Argamasilla de Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Argamasilla de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Argecilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arguisuelas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Argés",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Armuña de Tajuña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arrancacepas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arroba de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Arroyo de las Fraguas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Atalaya del Cañavate",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Atanzón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Atienza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Auñón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ayna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Azuqueca de Henares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Azután",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Añover de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Balazote",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ballesteros de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Balsa de Ves",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Barajas de Melo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Barchín del Hoyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Barcience",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bargas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Barrax",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Barriopedro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bascuñana de San Pedro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bañuelos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Beamud",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Belinchón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Belmonte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Belvís de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Berninches",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Beteta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bienservida",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bogarra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bolaños de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bonete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Boniches",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Borox",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Brazatortas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Brihuega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Buciegas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Budia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Buenache de Alarcón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Buenache de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Buenaventura",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Buendía",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bujalaro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Burguillos de Toledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Burujón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Bustares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cabanillas del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cabañas de Yepes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cabañas de la Sagra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cabezamesada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cabezarrubias del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Calera y Chozas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Caleruela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Calzada de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Calzada de Oropesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Camarena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Camarenilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Campillo de Altobuey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Campillo de Ranas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Campo de Criptana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Campos del Paraíso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Camuñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cantalojas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Caracuel de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carboneras de Guadazaón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carcelén",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cardenete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cardiel de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carmena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carranque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carrascosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carrascosa de Haro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carriches",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carrizosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Carrión de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casa de Uceda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casarrubios del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de Benítez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de Fernando Alonso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de Guijarro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de Haro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de Juan Núñez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de Lázaro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de San Galindo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de Ves",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas de los Pinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casas-Ibáñez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casasbuenas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Casasimarro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Caspueñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Castejón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Castellar de Santiago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Castilforte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Castillejo de Iniesta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Castillejo-Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Castillo de Bayuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Castillo de Garcimuñoz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Caudete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cazalegas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cañada Juncosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cañada de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cañada del Hoyo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cañamares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cañaveras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cañete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cañizar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cañizares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cebolla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cedillo del Condado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cenizate",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Centenera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cervera de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cervera del Llano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Checa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Chillarón de Cuenca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Chillarón del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Chillón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Chiloeches",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Chinchilla de Monte-Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Chozas de Canales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Chueca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cifuentes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cincovillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ciruelas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ciruelos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ciudad Real",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cobeja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cobisa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cogolludo",
    badge: "Ciudad",
  },
  {
    Merged:
      "Castilla-La Mancha, Comunidad de Cotillas y Villaverde de Guadalimar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Condemios de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Condemios de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Congostrina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Consuegra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Copernal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Corduente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Corral de Almaguer",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Corral de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Corral-Rubio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cotillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cuenca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cuerva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Cózar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Daimiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Domingo Pérez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Dosbarrios",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Driebes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Durón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Acebrón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Ballestero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Bonillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Campillo de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Cardoso de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Carpio de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Casar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Casar de Escalona",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Cañavate",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Cubillo de Uceda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Herrumblar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Hito",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Olivar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Pedernoso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Pedregal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Picazo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Provencio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Puente del Arzobispo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Real de San Vicente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Robledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Romeral",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Toboso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, El Viso de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Elche de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Enguídanos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Erustes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Escalona",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Escalonilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Escariche",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Escopete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Espinosa de Henares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Espinoso del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Esquivias",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Establés",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Estriégana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fernán Caballero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fontanar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fresneda de Altarejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuencaliente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuencemillán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuenllana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuensalida",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuensanta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuente de Pedro Naharro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuente el Fresno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuente-Álamo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuentealbilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuentelahiguera de Albatages",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuentelencina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuentelespino de Haro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuentelviejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuentenava de Jábaga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuentenovilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Fuentes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Férez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Gajanejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Galápagos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Garaballa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Garciotum",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Gascueña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Gascueña de Bornova",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Gerindote",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Golosalvo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Granátula de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Guadalajara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Guadalmez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Guadamur",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Gálvez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hellín",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Henarejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Heras de Ayuso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Herencia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Herreruela de Oropesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hiendelaencina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Higueruela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hinojosa de San Vicente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hinojosas de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hita",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Honrubia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hontanar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hontanaya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hontecillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hontoba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Horcajo de Santiago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Horcajo de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Horche",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hormigos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hoya-Gonzalo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Huecas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Huelves",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Huerta de Valdecarábanos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Huete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Hueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Humanes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Huérmeces del Cerro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Illana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Illescas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Iniesta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Irueste",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Jadraque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Jirueque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Jorquera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Alberca de Záncara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Almarcha",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Bodera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Estrella",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Gineta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Guardia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Herrera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Hinojosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Iglesuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Mata",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Miñosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Nava de Ricomalillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Olmeda de Jadraque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Parra de las Vegas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Peraleja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Pesquera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Puebla de Almoradiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Puebla de Montalbán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Pueblanueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Recueja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Roda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Solana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Toba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Torre de Esteban Hambrán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Villa de Don Fadrique",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, La Yunta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Lagartera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Lagunaseca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Landete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Herencias",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Inviernas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Labores",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Majadas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Mesas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Pedroñeras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Valeras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Ventas con Peña Aguilera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Ventas de Retamosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Las Ventas de San Julián",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Layos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ledanca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ledaña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Leganiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Letur",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Lezuza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Lillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Liétor",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Llanos del Caudillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Lominchar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Loranca de Tajuña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Los Cerralbos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Los Cortijos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Los Hinojosos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Los Navalmorales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Los Navalucillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Los Pozuelos de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Los Yébenes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Luciana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Lucillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Lupiana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Luzón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Madridejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Madrigueras",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Magán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mahora",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Majaelrayo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Malaguilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Malagón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Malpica de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mandayona",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mantiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Manzanares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Manzaneque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Maqueda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Maranchón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Marchamalo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mariana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Marjaliza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Marrupe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mascaraque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Masegoso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Masegoso de Tajuña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Matarrubia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Matillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mazarambroz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mazuecos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Medranda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mejorada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Membrilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Membrillera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Menasalbas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mesegar de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mestanza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Miguel Esteban",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Miguelturra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Minaya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Minglanilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mira",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mirabueno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mocejón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mochales",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mohedas de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mohernando",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Molina de Aragón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Molinicos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Monasterio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mondéjar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Montalbanejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Montalbo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Montalvos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Montarrón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Monteagudo de las Salinas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Montealegre del Castillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Montearagón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Montesclaros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Montiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mora",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Moral de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Moratilla de los Meleros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mota de Altarejos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Mota del Cuervo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Motilla del Palancar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Motilleja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Moya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Muduex",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Munera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Málaga del Fresno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Méntrida",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Nambroca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Narboneta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Navahermosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Navalcán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Navalpino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Navamorcuende",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Navas de Estena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Navas de Jorquera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Nerpio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Noblejas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Noez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Nombela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Novés",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Numancia de la Sagra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Nuño Gómez",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ocaña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Olivares de Júcar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Olmeda de Cobeta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Olmeda del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Olmedilla de Alarcón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Olmedilla de Eliz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Olías del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ontur",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ontígola",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Orea",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Orgaz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Oropesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Osa de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ossa de Montiel",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Otero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pajaroncillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Palomares del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Palomeque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Palomera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pantoja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Paredes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Paredes de Escalona",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Paredes de Sigüenza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pareja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Parrillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pastrana",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Paterna del Madera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pedro Muñoz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pelahustán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pepino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Peralejos de las Truchas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Peñalver",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Peñalén",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Peñas de San Pedro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Peñascosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Picón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Piedrabuena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pineda de Gigüela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pinilla de Jadraque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pioz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Poblete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Polán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Portilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Portillo de Toledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Porzuna",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Poveda de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Povedilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Poyatos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozo Cañada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozo de Guadalajara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozo-Lorente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozoamargo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozohondo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozorrubielos de la Mancha",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozorrubio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pozuelo de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Priego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Prádena de Atienza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puebla de Almenara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puebla de Beleña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puebla de Don Francisco",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puebla de Don Rodrigo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puebla de Valles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puebla del Príncipe",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puebla del Salvador",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puerto Lápice",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puerto de San Vicente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Puertollano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pulgar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pálmaces de Jadraque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Pétrola",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Quer",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Quero",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Quintanar de la Orden",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Quintanar del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Quismondo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Rada de Haro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Recas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Renera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Retamoso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Retuerta del Bullaque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Riba de Saelices",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Rielves",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Rillo de Gallo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Riópar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Robledillo de Mohernando",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Robledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Robledo de Corpes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Romanillos de Atienza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Romanones",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Rozalén del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Rueda de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ruidera",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sacecorbo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Saceda-Trasierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sacedón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Saelices",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Saelices de la Sal",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Salinas del Manzano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Salmerón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Salobre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Salvacañete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Andrés del Congosto",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Bartolomé de las Abiertas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Carlos del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Clemente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Lorenzo de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Lorenzo de la Parrilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Martín de Montalbán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Martín de Pusa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Pablo de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Pedro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Pedro Palmiches",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, San Román de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santa Ana de Pusa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santa Cruz de Moya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santa Cruz de Mudela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santa Cruz de la Zarza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santa Cruz del Retamar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santa María de los Llanos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santa María del Campo Rus",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santa Olalla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santiuste",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Santo Domingo-Caudilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sartajada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sayatón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Saúca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Segurilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Semillas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Seseña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Setiles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sevilleja de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sienes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sigüenza",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sisante",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Socovos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Socuéllamos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Solana del Pino",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Somolinos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sonseca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sotillo de las Palomas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Sotorribas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Talavera de la Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Talayuelas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tamajón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Taragudo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tarancón",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tarazona de la Mancha",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tembleque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tendilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Terrinches",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Terzaga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tierzo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tinajas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tobarra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Toledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tomelloso",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tordellego",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torija",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torralba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torralba de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torralba de Oropesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torre de Juan Abad",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torre del Burgo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrecilla de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrecuadrada de Molina",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrejoncillo del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrejón del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torremocha del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrenueva",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrico",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrijos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrubia",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Torrubia del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Totanés",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tragacete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tresjuncos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tribaldos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Trijueque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Trillo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Turleque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tébar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Tórtola de Henares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Uceda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Uclés",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Ugena",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Urda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Utande",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Uña",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdarachas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdearenas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdeavellano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdeaveruelo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdeconcha",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdeganga",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdegrudas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdelcubo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdemorillo de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdemoro-Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdenuño Fernández",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdeolivas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdepeñas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdepeñas de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdesotos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdetórtola",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valdeverdeja",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valenzuela de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valhermoso de la Fuente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valmojado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valtablado del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valverde de Júcar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valverde de los Arroyos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Valverdejo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Vara de Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Vega del Codorno",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Velada",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Vellisca",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Viana de Jadraque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Vianos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villa de Ves",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villacañas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villaconejos de Trabaque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villaescusa de Haro",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villafranca de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villagarcía del Llano",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villahermosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villalba de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villalba del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villalgordo del Júcar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villalgordo del Marquesado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villalpardo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villaluenga de la Sagra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villamalea",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villamanrique",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villamayor de Calatrava",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villamayor de Santiago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villamiel de Toledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villaminaya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villamuelas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villanueva de Alcardete",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villanueva de Bogas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villanueva de Guadamejud",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villanueva de San Carlos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villanueva de la Fuente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villanueva de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villanueva de la Torre",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villanueva de los Infantes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villapalacios",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villar de Cañas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villar de Domingo García",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villar de Olalla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villar del Humo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villar del Infantado",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villar del Pozo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villarejo de Fuentes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villarejo de Montalbán",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villares de Jadraque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villares del Saz",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villarrobledo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villarrubia de Santiago",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villarrubia de los Ojos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villarrubio",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villarta",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villarta de San Juan",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villas de la Ventosa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villaseca de Uceda",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villaseca de la Sagra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villasequilla",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villatobas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villatoya",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villavaliente",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villaverde de Guadalimar",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villaverde y Pasaconsol",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Villel de Mesa",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Viso del Marqués",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Viveros",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Viñuelas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Víllora",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yebes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yebra",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yeles",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yepes",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yeste",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yuncler",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yunclillos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yuncos",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yunquera de Henares",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yélamos de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Yélamos de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Zafra de Záncara",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Zaorejas",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Zarza de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Zarzuela",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Zarzuela de Jadraque",
    badge: "Ciudad",
  },
  {
    Merged: "Castilla-La Mancha, Zorita de los Canes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña",
    badge: "Comunidad",
  },
  {
    Merged: "Cataluña, Abella de la Conca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Abrera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Agramunt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Aguilar de Segarra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Agullana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Aiguafreda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Aiguamúrcia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Aiguaviva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Aitona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Albanyà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Albatàrrec",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Albesa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Albinyana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Albons",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alcanar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alcanó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alcarràs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alcoletge",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alcover",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Aldover",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alfara de Carles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alfarràs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alforja",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alfés",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Algerri",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alguaire",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alins",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alió",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Almacelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Almatret",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Almenar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Almoster",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alpens",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alpicat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alt Àneu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Altafulla",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alàs i Cerc",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Alòs de Balaguer",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Amer",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Amposta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Anglesola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Anglès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Arbeca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Arbolí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Arbúcies",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Arenys de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Arenys de Munt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Argelaguer",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Argentona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Argençola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Arnes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Arres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Arsèguel",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Artesa de Lleida",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Artesa de Segre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Artés",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ascó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Aspa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Avinyonet de Puigventós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Avinyonet del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Avinyó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Avià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Badalona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Badia del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bagà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Baix Pallars",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Balaguer",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Balenyà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Balsareny",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Banyeres del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Banyoles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Barbens",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Barberà de la Conca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Barberà del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Barcelona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Barcelona, Baró De Viver",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Can Baró",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Can Peguera",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Canyelles",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Ciutat Meridiana",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Diagonal Mar I El Front Marítim Del Poblenou",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Baix Guinardó",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Barri Gòtic",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Besòs I El Maresme",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Bon Pastor",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Camp D'En Grassot I Gràcia Nova",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Camp De L'Arpa Del Clot",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Carmel",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Clot",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Coll",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Congrés I Els Indians",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Fort Pienc",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Guinardó",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Parc I La Llacuna Del Poblenou",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Poble-Sec",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Poblenou",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Putxet I El Farró",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Raval",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, El Turó De La Peira",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Horta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Hostafrancs",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, L'Antiga Esquerra De L'Eixample",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Barceloneta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Bordeta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Clota",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Dreta De L'Eixample",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Font D'En Fargues",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Font De La Guatlla",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Guineueta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Marina De Port",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Marina Del Prat Vermell",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Maternitat I Sant Ramon",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Nova Esquerra De L'Eixample",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Prosperitat",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Sagrada Família",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Sagrera",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Salut",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Teixonera",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Trinitat Nova",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Trinitat Vella",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Vall D'Hebron",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Verneda I La Pau",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Vila De Gràcia",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, La Vila Olímpica Del Poblenou",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Les Corts",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Les Roquetes",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Les Tres Torres",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Montbau",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Navas",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Pedralbes",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Porta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Provençals Del Poblenou",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sant Andreu",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sant Antoni",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sant Genís Dels Agudells",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sant Gervasi - Galvany",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sant Gervasi - La Bonanova",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sant Martí De Provençals",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sant Pere, Santa Caterina I La Ribera",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sants",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sants - Badal",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Sarrià",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Torre Baró",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Vallbona",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Vallcarca I Els Penitents",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Vallvidrera, El Tibidabo I Les Planes",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Verdun",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Barcelona, Vilapicina I La Torre Llobeta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Bassella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Batea",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bausen",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Begues",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Begur",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Belianes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bell-lloc d'Urgell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellaguarda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellcaire d'Empordà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellcaire d'Urgell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellmunt d'Urgell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellmunt del Priorat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellprat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellpuig",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellvei",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellver de Cerdanya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bellvís",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Benavent de Segrià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Benifallet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Benissanet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Berga",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Besalú",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bescanó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Beuda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bigues i Riells",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Biosca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Biure",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Blancafort",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Blanes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Boadella d'Empordà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bolvir",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bonastre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bordils",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Borrassà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Borredà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bossòst",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bot",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Botarell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bovera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Breda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Brunyola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bràfim",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Bàscara",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabacés",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabanabona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabanelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabanes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabra del Camp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabrera d'Igualada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabrera de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabrils",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cabó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cadaqués",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Calaf",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Calafell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Calders",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Caldes d'Estrac",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Caldes de Malavella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Caldes de Montbui",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Calella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Calldetenes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Callús",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Calonge",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Calonge de Segarra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Camarasa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Camarles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cambrils",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Campdevànol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Campelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Campins",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Campllong",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Camprodon",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Camós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Canejan",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Canet d'Adri",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Canet de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Canovelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cantallops",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Canyelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Capafonts",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Capellades",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Capmany",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Capolat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Capçanes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cardedeu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cardona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Carme",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Caseres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Casserres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cassà de la Selva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castell de Mur",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castell de l'Areny",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castell-Platja d'Aro",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellar de n'Hug",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellar del Riu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellar del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellbell i el Vilar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellbisbal",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellcir",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castelldans",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castelldefels",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellet i la Gornal",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellfollit de Riubregós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellfollit del Boix",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellgalí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellnou de Bages",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellnou de Seana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellolí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellserà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellterçol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellvell del Camp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellví de Rosanes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castellví de la Marca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castelló d'Empúries",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Castelló de Farfanya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cava",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Celrà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Centelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cercs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cerdanyola del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cervelló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cervera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cervià de Ter",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cervià de les Garrigues",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cistella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ciutadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Clariana de Cardener",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Colera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Coll de Nargó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Collbató",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Colldejou",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Collsuspina",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Colomers",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Conca de Dalt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Conesa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Constantí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Copons",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Corbera d'Ebre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Corbera de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Corbins",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cornellà de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cornellà del Terri",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cornudella de Montsant",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Corçà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Creixell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Crespià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cruïlles, Monells i Sant Sadurní de l'Heura",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cubelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cubells",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cunit",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Cànoves i Samalús",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Darnius",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Das",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Deltebre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Dosrius",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Duesaigües",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Alamús",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Bruc",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Brull",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Catllar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Cogul",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Far d'Empordà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Lloar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Masnou",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Masroig",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Milà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Molar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Montmell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Morell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Palau d'Anglesola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Papio",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Perelló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Pinell de Brai",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Pla de Santa Maria",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Pla del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Poal",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Pont d'Armentera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Pont de Bar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Pont de Suert",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Pont de Vilomara i Rocafort",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Port de la Selva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Prat de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Rourell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Soleràs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Vendrell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, El Vilosell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Garidells",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Guiamets",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Hostalets de Pierola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Omellons",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Omells de na Gaia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Pallaresos",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Plans de Sió",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Prats de Rei",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Els Torms",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Es Bòrdes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Esparreguera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Espinelves",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Esplugues de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Espolla",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Esponellà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Espot",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Estamariu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Estaràs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Esterri d'Àneu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Falset",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Farrera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Figaró-Montmany",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Figueres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Figuerola del Camp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Flaçà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Flix",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fogars de Montclús",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fogars de la Selva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Foixà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Folgueroles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fondarella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fonollosa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Font-rubí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fontanals de Cerdanya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fontanilles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fontcoberta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Foradada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Forallac",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fornells de la Selva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fortià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Forès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Freginals",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fulleda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fígols",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Fígols i Alinyà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gaià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gallifa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gandesa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Garcia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Garrigoles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Garriguella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Garrigàs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gavet de la Conca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gavà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gelida",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ger",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gimenells i el Pla de la Font",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ginestar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Girona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Girona, Centre",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Girona, Eixample",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Girona, Est",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Girona, Mas Xirgu",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Girona, Montjuïc",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Girona, Nord",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Girona, Oest",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Girona, Santa Eugènia",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Girona, Sud",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Gironella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gisclareny",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Godall",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Golmés",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gombrèn",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Granera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Granollers",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Granyanella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Granyena de Segarra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Granyena de les Garrigues",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gratallops",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gualba",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gualta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Guardiola de Berguedà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Guils de Cerdanya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Guimerà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Guissona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Guixers",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gurb",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Gósol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Horta de Sant Joan",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Hostalric",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Igualada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Isona i Conca Dellà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Isòvol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ivars d'Urgell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ivars de Noguera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ivorra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Jafre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Jorba",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Josa i Tuixén",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Juià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Juncosa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Juneda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Albagés",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Albi",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Albiol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Aldea",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Aleixar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Ametlla de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Ametlla del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Ampolla",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Arboç",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Argentera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Armentera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Escala",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Espluga Calba",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Espluga de Francolí| Espluga de Francolí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Espunyola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Estany",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, L'Hospitalet de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Baronia de Rialb",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Bisbal d'Emporda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Bisbal de Falset",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Bisbal del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Cellera de Ter",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Coma i la Pedra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Fatarella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Febró",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Figuera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Floresta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Fuliola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Galera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Garriga",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Granada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Granadella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Granja d'Escarp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Guingueta d'Àneu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Jonquera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Llacuna",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Llagosta",
    badge: "Ciudad",
  },
  {
    Merged:
      "Cataluña, La Mancomunitat dels Quatre Pobles (Alt Àneu y Esterri d'Àneu)",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Masó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Molsosa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Morera de Montsant",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Nou de Berguedà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Nou de Gaià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Palma d'Ebre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Palma de Cervelló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Pera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Pobla de Claramunt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Pobla de Cérvoles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Pobla de Lillet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Pobla de Mafumet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Pobla de Massaluca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Pobla de Montornès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Pobla de Segur",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Portella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Quar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Riba",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Riera de Gaià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Roca del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Secuita",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Selva de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Selva del Camp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Sentiu de Sió",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Seu d'Urgell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Sénia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Tallada d'Empordà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Torre de Cabdella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Torre de Claramunt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Torre de Fontaubella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Torre de l'Espanyol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Vajol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Vall d'en Bas",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Vall de Bianya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Vall de Boí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Vansa i Fórnols",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Vilella Alta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, La Vilella Baixa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Avellanes i Santa Linya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Borges Blanques",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Borges del Camp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Cabanyes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Franqueses del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Llosses",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Masies de Roda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Masies de Voltregà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Oluges",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Piles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Planes d'Hostoles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Preses",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Valls d'Aguilar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Les Valls de Valira",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Linyola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lladorre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lladurs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lladó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llagostera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llambilles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llanars",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llançà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llardecans",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llavorsí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lleida",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lleida, Balafia",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Basses D'Alpicat",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Bordeta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Camps D'Esports",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Cappont",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Centre Històric",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Ciutat Jardí",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Instituts - Templers",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Joc De La Bola",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Llﾃｭvia",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Magraners",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Mariola",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Pardinies",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Poligon Lleidaparc",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Poligon Vilanoveta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Princep De Viana - Clec",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Rambla De Ferran - Estaciò",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Secá De Sant Pere",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Universitat",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Lleida, Xalets - Humbert Torres",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Llers",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lles de Cerdanya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llimiana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llinars del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lliçà d'Amunt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lliçà de Vall",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llobera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llorac",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llorenç del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lloret de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Lluçà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Llívia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Madremanya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Maials",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Maià de Montcal",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Maldà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Malgrat de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Malla",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Manlleu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Manresa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Margalef",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Marganell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Martorell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Martorelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Marçà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mas de Barberans",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Masarac",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Masdenverge",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Masllorenç",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Maspujols",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Masquefa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Massalcoreig",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Massanes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Massoteres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Matadepera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mataró",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Maçanet de Cabrenys",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Maçanet de la Selva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mediona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Menàrguens",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Meranges",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mieres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Miralcamp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Miravet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Moià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Molins de Rei",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mollerussa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mollet de Peralada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mollet del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Molló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Monistrol de Calders",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Monistrol de Montserrat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mont-ral",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mont-ras",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mont-roig del Camp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montagut i Oix",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montblanc",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montbrió del Camp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montcada i Reixac",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montellà i Martinet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montesquiu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montferrer i Castellbò",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montferri",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montgai",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montgat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montmajor",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montmaneu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montmeló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montoliu de Lleida",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montoliu de Segarra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montornès de Segarra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montornès del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Montseny",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Muntanyola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Mura",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Móra d'Ebre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Móra la Nova",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Nalec",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Naut Aran",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Navarcles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Navata",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Navàs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Navès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Nulles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ogassa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Olesa de Bonesvalls",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Olesa de Montserrat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Oliana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Oliola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Olius",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Olivella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Olost",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Olot",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Olvan",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Olèrdola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ordis",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Organyà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Oristà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Orpí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Orís",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Os de Balaguer",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Osor",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ossó de Sió",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pacs del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Palafolls",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Palafrugell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Palamós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Palau de Santa Eulàlia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Palau-sator",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Palau-saverdera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Palau-solità i Plegamans",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pallejà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Palol de Revardit",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pals",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pardines",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Parets del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Parlavà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Passanant",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pau",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Paüls",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pedret i Marzà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Penelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Perafita",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Perafort",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Peralada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Peramola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Piera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pineda de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pinós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pira",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Planoles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Poboleda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Polinyà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pont de Molins",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pontils",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pontons",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ponts",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pontós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Porqueres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Porrera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Portbou",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pradell de la Teixeta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Prades",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Prat de Comte",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pratdip",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Prats de Lluçanès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Prats i Sansor",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Preixana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Preixens",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Premià de Dalt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Premià de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Prullans",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Puig-reig",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Puigcerdà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Puiggròs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Puigpelat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Puigverd d'Agramunt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Puigverd de Lleida",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Pujalt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Quart",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Queralbs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Querol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rabós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rajadell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rasquera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Regencós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rellinars",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Renau",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Reus",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rialp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riba-roja d'Ebre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ribera d'Ondara",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ribera d'Urgellet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ribes de Freser",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riells i Viabrea",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riner",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ripoll",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ripollet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riu de Cerdanya",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riudarenes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riudaura",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riudecanyes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riudecols",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riudellots de la Selva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riudoms",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Riumors",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rocafort de Queralt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Roda de Barà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Roda de Ter",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rodonyà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Roquetes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Roses",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rosselló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rubió",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rubí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rupit i Pruit",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Rupià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sabadell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sagàs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Saldes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sales de Llierca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sallent",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Salomó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Salou",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Salt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Salàs de Pallars",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sanaüja",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Adrià de Besòs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Agustí de Lluçanès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Andreu Salou",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Andreu de Llavaneres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Andreu de la Barca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Aniol de Finestres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Antoni de Vilamajor",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Bartomeu del Grau",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Boi de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Boi de Lluçanès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Carles de la Ràpita",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Cebrià de Vallalta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Celoni",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Climent Sescebes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Climent de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Cugat Sesgarrigues",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Cugat del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Esteve Sesrovires",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Esteve de Palautordera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Esteve de la Sarga",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Feliu Sasserra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Feliu de Buixalleu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Feliu de Codines",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Feliu de Guíxols",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Feliu de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Feliu de Pallerols",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Ferriol",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Fost de Campsentelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Fruitós de Bages",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Gregori",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Guim de Freixenet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Guim de la Plana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Hilari Sacalm",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Hipòlit de Voltregà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Iscle de Vallalta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Jaume d'Enveja",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Jaume de Frontanyà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Jaume de Llierca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Jaume dels Domenys",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Joan Despí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Joan de Mollet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Joan de Vilatorrada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Joan de les Abadesses",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Joan les Fonts",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Jordi Desvalls",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Julià de Cerdanyola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Julià de Ramis",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Julià de Vilatorta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Julià del Llor i Bonmatí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Just Desvern",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Llorenç Savall",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Llorenç d'Hortons",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Llorenç de Morunys",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Llorenç de la Muga",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Martí Sarroca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Martí Sesgueioles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Martí Vell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Martí d'Albars",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Martí de Centelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Martí de Llémena",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Martí de Riucorb",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Martí de Tous",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Mateu de Bages",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Miquel de Campmajor",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Miquel de Fluvià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Mori",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Pau de Segúries",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Pere Pescador",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Pere Sallavinera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Pere de Ribes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Pere de Riudebitlles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Pere de Torelló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Pere de Vilamajor",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Pol de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Quintí de Mediona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Quirze Safaja",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Quirze de Besora",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Quirze del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Ramon",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Sadurní d'Anoia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Sadurní d'Osormort",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Salvador de Guardiola",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Vicenç de Castellet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Vicenç de Montalt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Vicenç de Torelló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sant Vicenç dels Horts",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Bàrbara",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Cecília de Voltregà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Coloma de Cervelló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Coloma de Farners",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Coloma de Gramenet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Coloma de Queralt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Cristina d'Aro",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Eugènia de Berga",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Eulàlia de Riuprimer",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Eulàlia de Ronçana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Fe del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Llogaia d'Àlguema",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Margarida de Montbui",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Margarida i els Monjos",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Maria d'Oló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Maria de Besora",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Maria de Corcó",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Maria de Martorelles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Maria de Merlès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Maria de Miralles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Maria de Palautordera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Oliva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Pau",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Perpètua de Mogoda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santa Susanna",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Santpedor",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sarral",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sarrià de Ter",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sarroca de Bellera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sarroca de Lleida",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Saus",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Savallà del Comtat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Senan",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Senterada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sentmenat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Serinyà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Serra de Daró",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Seròs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Setcases",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Seva",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sidamon",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sils",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sitges",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Siurana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sobremunt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Solivella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Solsona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sora",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Soriguera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sort",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Soses",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Subirats",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sudanell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Sunyer",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Susqueda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Súria",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tagamanent",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Talamanca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Talarn",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Talavera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Taradell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tarragona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tarragona, Barris Maritims",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, Campclar",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, Eixample",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, La Mora",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, Nou Eixample Nord",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, Part Alt",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, San Salvador",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, Sant Pere I Sant Pau",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, Torreforta",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarragona, Urbanitzacions De Levant",
    badge: "Barrio",
  },
  {
    Merged: "Cataluña, Tarroja de Segarra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tarrés",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tavertet",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tavèrnoles",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Teià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Terrades",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Terrassa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tiana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tivenys",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tivissa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tordera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torelló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tornabous",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torre-serona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torrebesses",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torredembarra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torrefarrera",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torrefeta i Florejacs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torregrossa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torrelameu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torrelavit",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torrelles de Foix",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torrelles de Llobregat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torrent",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torres de Segre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torroella de Fluvià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torroella de Montgrí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torroja del Priorat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tortellà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tortosa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Torà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Toses",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tossa de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tremp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tàrrega",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Térmens",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Tírvia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ullastrell",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ullastret",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ulldecona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ulldemolins",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ullà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ultramort",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Urús",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vacarisses",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vall de Cardós",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vall-llobrega",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallbona d'Anoia",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallbona de les Monges",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallcebre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallclara",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallfogona de Balaguer",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallfogona de Ripollès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallfogona de Riucorb",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallgorguina",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallirana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallmoll",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vallromanes",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Valls",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vandellòs i l'Hospitalet de l'Infant",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Veciana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Ventalló",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Verdú",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Verges",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vespella de Gaià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vic",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vidreres",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vidrà",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vielha e Mijaran",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vila-rodona",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vila-sacra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vila-sana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vila-seca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilabella",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilabertran",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilablareix",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilada",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Viladamat",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Viladasens",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Viladecans",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Viladecavalls",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilademuls",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Viladrau",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilafant",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilafranca del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilagrassa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilajuïga",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilalba Sasserra",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilalba dels Arcs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilaller",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilallonga de Ter",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilallonga del Camp",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilamacolum",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilamalla",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilamaniscle",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilamòs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanant",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova d'Escornalbou",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova de Bellpuig",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova de Meià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova de Prades",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova de Sau",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova de Segrià",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova de l'Aguda",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova de la Barca",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova del Camí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova del Vallès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilanova i la Geltrú",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilaplana",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilassar de Dalt",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilassar de Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilaverd",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilaür",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilobí d'Onyar",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilobí del Penedès",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vilopriu",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vimbodí",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vinaixa",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vinebre",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Vinyols i els Arcs",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Xerta",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Àger",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Òdena",
    badge: "Ciudad",
  },
  {
    Merged: "Cataluña, Òrrius",
    badge: "Ciudad",
  },
  {
    Merged: "Ceuta y Melilla",
    badge: "Comunidad",
  },
  {
    Merged: "Ceuta y Melilla, Ceuta",
    badge: "Ciudad",
  },
  {
    Merged: "Ceuta y Melilla, Melilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra",
    badge: "Comunidad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Abaurrepea",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Aberin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ablitas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Abáigar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Abárzuza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Adiós",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Aguilar de Codés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Aibar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Allo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Allín",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Altsasu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Améscoa Baja",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ancín",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Andosilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ansoáin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Anue",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Aoiz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Araitz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arakil",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Aranguren",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arano",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arantza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Aras",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arbizu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arce",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arellano",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Areso",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arguedas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Aribe",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Armañanzas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arruazu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Arróniz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Artajona",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Artazu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Atez",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Auritz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ayegui",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Azagra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Azuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Añorbe",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Bakaiku",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Barañain",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Barbarin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Bardenas Reales",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Bargota",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Barillas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Barásoain",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Basaburua",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Baztan",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Beintza-Labaien",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Beire",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Belascoáin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Bera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Berbinzana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Beriáin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Berrioplano",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Berriozar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Bertizarana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Betelu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Bidaurreta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Biurrun-Olcoz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Burgui",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Burlada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Buñuel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cabanillas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cabredo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cadreita",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Caparroso",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Carcastillo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cascante",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Castejón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cintruénigo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cirauqui",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ciriza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cizur",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Corella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cortes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cárcar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Cáseda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Desojo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Dicastillo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Donamaria",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Doneztebe",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Echarri",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Egüés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, El Busto",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Elgorriaga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Enériz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Eratsun",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ergoiena",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Erro",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Eslava",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Esparza de Salazar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Espronceda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Estella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Esteribar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Etxalar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Etxarri-Aranatz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Etxauri",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Eulate",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ezcabarte",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ezcároz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ezkurra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Falces",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Fitero",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Fontellas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Funes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Fustiñana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Galar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Gallipienzo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Gallués",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Garaioa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Garde",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Garralda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Garínoain",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Genevilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Goizueta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Goñi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Guesálaz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Guirguillano",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Hiriberri",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Huarte",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ibargoiti",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Igantzi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Igúzquiza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Imotz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Irañeta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Irurtzun",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Isaba",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ituren",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Iturmendi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Iza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Izagaondoa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Jaurrieta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Javier",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Juslapeña",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lakuntza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lapoblación",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Larraga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Larraona",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Larraun",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lazagurría",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Leache",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Legarda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Legaria",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Leitza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lekunberri",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Leoz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lerga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lerín",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lesaka",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lezáun",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lizoáin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Liédena",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lodosa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Los Arcos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lumbier",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Luquin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Luzaide",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Lónguida",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Marañón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Marcilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Mañeru",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Mendavia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Mendaza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Mendigorría",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Metauten",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Milagro",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Mirafuentes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Miranda de Arga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Monreal",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Monteagudo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Morentin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Mues",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Murchante",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Murieta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Murillo el Cuende",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Murillo el Fruto",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Muruzábal",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Mélida",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Navascués",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Nazar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Noáin",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Obanos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ochagavía",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Oco",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Odieta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Oitz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Olaibar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Olazti",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Olejua",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Olite",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ollo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Olza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Olóriz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Orbaitzeta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Orbara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Orcoyen",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Oronz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Oroz-Betelu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Orreaga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Orísoain",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Oteiza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Pamplona",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Peralta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Piedramillera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Pitillas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Puente la Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Pueyo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ribaforada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Romanzado",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Roncal",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Sada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Saldías",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Salinas de Oro",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, San Adrián",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, San Martín de Unx",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Sangüesa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Sansol",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Santacara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Sarriés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Sartaguda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Sesma",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Sorlada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Sunbilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Tafalla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Tiebas-Muruarte de Reta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Tirapu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Torralba del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Torres del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Tudela",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Tulebras",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ucar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Uharte-Arakil",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ujué",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ultzama",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Unciti",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Unzué",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Urdazubi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Urdiain",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Urraul Alto",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Urraul Bajo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Urrotz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Urroz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Urzainqui",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Uterga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Uztárroz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Valtierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Viana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Villafranca",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Villamayor de Monjardín",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Villatuerta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Villava",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Yerri",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Yesa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Zabalza",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Ziordia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Zizur Mayor",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Zubieta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Zugarramurdi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Foral de Navarra, Zúñiga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana",
    badge: "Comunidad",
  },
  {
    Merged: "Comunidad Valenciana, Ademuz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ador",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Adsubia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Agost",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Agres",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Agullent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Aielo de Malferit",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Aielo de Rugat",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Aigües",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alaquàs",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Albaida",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Albal",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Albalat de la Ribera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Albalat dels Sorells",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Albalat dels Tarongers",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Albatera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alberic",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Albocàsser",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alborache",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alboraya",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Albuixech",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcalalí",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcalà de Xivert",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcocer de Planes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcoleja",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcoy",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcublas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcudia de Veo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcàntera de Xúquer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alcàsser",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Aldaia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alfafar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alfafara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alfara de Algimia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alfara del Patriarca",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alfarp",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alfarrasí",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alfauir",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alfondeguilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Algar de Palancia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Algemesí",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Algimia de Alfara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Algimia de Almonacid",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alginet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Algorfa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Algueña",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alicante",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Albufereta",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Alipark",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Altozano-Conde Lumiares",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Bacarot",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Benalua",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Cabo De Las Huertas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Campoamor",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Carolinas Altas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Carolinas Bajas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Casco Antiguo - Santa Cruz",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Cañada Del Fenollar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Centro",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Ciudad De Asis",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Ciudad Jardín",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Colonia Requena",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Condomina - Playa San Juan",
    badge: "Barrio",
  },
  {
    Merged:
      "Comunidad Valenciana, Alicante, Condomina Golf - Playa De San Juan",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Cuatrocientas Viviendas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Divina Pastora",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, El Palmeral -Urbanova - Tabarca",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Ensanche - Diputación",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Florida Alta",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Florida Baja",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Fontcalent",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Garbinet",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Juan Xxiii",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, La Alcoraya",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Lo Morant - San Nicolás De Bari",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Los Ángeles",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Mercado",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Monnegre",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Moralet",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Pau 1",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Pau 2",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Playa De San Juan",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Playa De San Juan - Pau 5",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Plá Del Bon Repós",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Polígono Babel",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Polígono De San Blas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Polígono Industrial Las Atalayas",
    badge: "Barrio",
  },
  {
    Merged:
      "Comunidad Valenciana, Alicante, Polígono Industrial Pla De La Vallonga",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Puerto",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Rabal Roig - Virgen Del Socorro",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Rabasa",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Rebolledo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, San Agustín",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, San Antón",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, San Blas - Santo Domingo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, San Fernando - Princesa Mercedes",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, San Gabriel",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Santa Faz",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Serra Grossa",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Sidi Ifni - Nou Alacant",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Tabarca",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Tómbola",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Verdegás",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Villafranqueza",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Virgen Del Carmen",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Virgen Del Remedio",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Alicante, Vistahermosa",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Almazora",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Almedíjar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Almenara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Almiserà",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Almoines",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Almoradí",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Almudaina",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Almussafes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Almàssera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alpuente",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alquería de la Condesa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alquerías del Niño Perdido",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Altea",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Altura",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Alzira",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Andilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Anna",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Antella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Aras de los Olmos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Arañuel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ares del Maestre",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Argelita",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Artana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Aspe",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Atzeneta d'Albaida",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Atzeneta del Maestrat",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ayora",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ayódar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Azuébar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Aín",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Balones",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Banyeres de Mariola",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Barracas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Barx",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Barxeta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bejís",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bellreguard",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bellús",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benafer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benafigos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benaguasil",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benagéber",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benasal",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benasau",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benavites",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beneixama",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beneixida",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benejúzar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benetússer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benferri",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beniarbeig",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beniardá",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beniarjó",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beniarrés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beniatjar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benicarló",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benicasim",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benicolet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benicull de Xúquer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benidoleig",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benidorm",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benifairó de la Valldigna",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benifairó de les Valls",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benifaió",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benifallim",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benifato",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beniflá",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benigánim",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benijófar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benilloba",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benillup",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benimantell",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benimarfull",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benimassot",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benimeli",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benimodo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benimuslem",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Beniparrell",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benisanó",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benissa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benissoda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benisuera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benitachell",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Benlloch",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Betxí",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Biar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bicorp",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bigastro",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Binigembla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bocairent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bolbaite",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bolulla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bonrepòs i Mirambell",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Borriol",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bufali",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bugarra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Burjassot",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Burriana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Busot",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Buñol",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bèlgida",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Bétera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cabanes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Calles",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Callosa d'En Sarrià",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Callosa de Segura",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Calpe",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Campo de Mirra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Camporrobles",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Canals",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Canet d'En Berenguer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Canet lo Roig",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Carcaixent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Carlet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Carrícola",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Casas Altas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Casas Bajas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Casinos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castalla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castell de Cabres",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castell de Castells",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castellfort",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castellnovo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castellonet de la Conquesta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castelló de Rugat",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castellón de la Plana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castielfabib",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Castillo de Villamalefa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Catadau",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Catarroja",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Catral",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Catí",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Caudete de las Fuentes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Caudiel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cañada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cerdà",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cervera del Maestre",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chelva",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chert",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cheste",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chilches",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chiva",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chodos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chulilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Chóvar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cinctorres",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cirat",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cocentaina",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cofrentes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Confrides",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Corbera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cortes de Arenoso",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cortes de Pallás",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Costur",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cotes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cox",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Crevillent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Culla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Cullera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Càlig",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Càrcer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Daimús",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Daya Nueva",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Daya Vieja",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Dolores",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Domeño",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Dos Aguas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Dénia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, El Campello",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, El Castell de Guadalest",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, El Palomar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, El Ràfol d'Almúnia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, El Toro",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, El Verger",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Elche",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Elda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Els Poblets",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Enguera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Eslida",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Espadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Estivella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Estubeny",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Facheca",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Famorca",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Fanzara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Faura",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Favara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Figueroles",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Finestrat",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Foios",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Fontanars dels Alforins",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Forcall",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Formentera del Segura",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Fortaleny",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Fuente la Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Fuenterrobles",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Fuentes de Ayódar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gaianes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gaibiel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gandia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gata de Gorgos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gavarda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Genovés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gestalgar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gilet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Godella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Godelleta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gorga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Granja de Rocamora",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Guadasequies",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Guadassuar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Guardamar de la Safor",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Guardamar del Segura",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Gátova",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Herbés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Higueras",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Higueruelas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Hondón de las Nieves",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Hondón de los Frailes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ibi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Jacarilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Jalance",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Jalón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Jarafuel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Jijona",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Jávea",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Jérica",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, L'Alcora",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, L'Alcúdia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, L'Alcúdia de Crespins",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, L'Alfàs del Pi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, L'Alqueria d'Asnar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, L'Eliana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, L'Olleria",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, L'Ènova",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Font d'En Carròs",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Font de la Figuera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Granja de la Costera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Jana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Llosa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Llosa de Ranes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Mata de Morella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Nucia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Pobla Llarga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Pobla Tornesa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Pobla de Benifassà",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Pobla de Farnals",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Pobla de Vallbona",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Pobla del Duc",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Romana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Salzadella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Torre d'En Besora",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Vall d'Alcalà",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Vall d'Uixó",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Vall de Laguar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Vilavella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, La Yesa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Les Coves de Vinromà",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Les Useras",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Llanera de Ranes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Llaurí",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Llocnou d'En Fenollet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Llocnou de Sant Jeroni",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Llombai",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Llutxent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Llíber",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Llíria",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Lorcha",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Loriguilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Los Montesinos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Losa del Obispo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Lucena del Cid",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ludiente",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Macastre",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Manises",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Manuel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Marines",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Masalavés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Massalfassar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Massamagrell",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Massanassa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Matet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Meliana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Millares",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Millena",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Miramar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Mislata",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Mogente",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Moncada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Moncofa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Monforte del Cid",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Monserrat",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Montanejos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Montaverner",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Montesa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Montichelvo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Montroy",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Montán",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Monóvar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Morella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Murla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Muro de Alcoy",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Museros",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Mutxamel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Navajas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Navarrés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Novelda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Novelé",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Nules",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Náquera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Oliva",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Olocau",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Olocau del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Onda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ondara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Onil",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ontinyent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Orba",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Orihuela",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Oropesa del Mar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Orxeta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Otos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Paiporta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Palanques",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Palma de Gandía",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Palmera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Parcent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Paterna",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Pavías",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Pedralba",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Pedreguer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Pego",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Penàguila",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Petrer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Petrés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Peñíscola",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Picanya",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Picassent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Pilar de la Horadada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Piles",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Pina de Montalgrao",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Pinet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Pinoso",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Planes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Polinyà de Xúquer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Polop",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Portell de Morella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Potríes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Puebla de Arenoso",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Puig",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Puçol",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Quart de Poblet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Quart de les Valls",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Quartell",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Quatretonda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Quatretondeta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Quesa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rafal",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rafelbuñol",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rafelcofer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rafelguaraf",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Real de Gandía",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Real de Montroi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Redován",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Relleu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Requena",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Riba-roja de Túria",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ribesalbes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Riola",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rocafort",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rojales",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rossell",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rotglà i Corberà",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rugat",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Ráfol de Salem",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Rótova",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sacañet",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sagra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sagunto",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Salem",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Salinas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, San Antonio de Benagéber",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, San Fulgencio",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, San Isidro",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, San Juan de Énova",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, San Miguel de Salinas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, San Rafael del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, San Vicente del Raspeig",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sanet y Negrals",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sant Joan d'Alacant",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sant Joan de Moró",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sant Jordi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sant Mateu",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Santa Magdalena de Pulpis",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Santa Pola",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sarratella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sax",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sedaví",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Segart",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Segorbe",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sellent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sempere",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Senija",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Senyera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Serra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sierra Engarcerán",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Siete Aguas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Silla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Simat de la Valldigna",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sinarcas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sollana",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Soneja",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sot de Chera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sot de Ferrer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sueca",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sueras",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Sumacàrcer",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tales",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tavernes Blanques",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tavernes de la Valldigna",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Teresa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Teresa de Cofrentes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Terrateig",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Teulada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tibi",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Titaguas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Todolella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Toga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tollos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tormos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torralba del Pinar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torre Endoménech",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torrebaja",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torreblanca",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torrechiva",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torrella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torremanzanas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torrent",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torres Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torrevieja",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Torás",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tous",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Traiguera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Turís",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tuéjar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tárbena",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Tírig",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Utiel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Valencia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Aiora",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Albors",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Arrancapins",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Benicalap",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Benifaraig",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Beniferri",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Benimaclet",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Benimamet",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Betero",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Borboto",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Cabanyal-Canyamelar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Cami De Vera",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Cami Fondo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Cami Real",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Campanar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Carpesa",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Castellar-L'Oliveral",
    badge: "Barrio",
  },
  {
    Merged:
      "Comunidad Valenciana, Valencia, Ciutat De Les Arts I De Les Ciencies",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Ciutat Fallera",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Ciutat Jardi",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Ciutat Universitaria",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Botanic",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Calvari",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Carme",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Forn D'Alcedo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Grau",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Mercat",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Palmar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Perellonet",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Pilar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Pla Del Remei",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, El Saler",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Els Orriols",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, En Corts",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Exposicio",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Faitanar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Favara",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Jaume Roig",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, L'Amistat",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, L'Hort De Senabre",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, L'Illa Perduda",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Carrasca",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Creu Coberta",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Creu Del Grau",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Fonteta S.Lluis",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Fontsanta",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Gran Via",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Llum",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Malva-Rosa",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Petxina",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Punta",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Raiosa",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Roqueta",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Seu",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Torre",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Vega Baixa",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, La Xerea",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Les Cases De Barcena",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Les Tendetes",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Mahuella-Tauladella",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Malilla",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Marxalenes",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Massarrojos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Mestalla",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Montolivet",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Morvedre",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Na Rovella",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Natzaret",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Nou Moles",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Patraix",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Penya-Roja",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Pinedo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Poble Nou",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Rafalell-Vistabella",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Russafa",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Safranar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Sant Antoni",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Sant Francesc",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Sant Isidre",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Sant Llorens",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Sant Marcel.Li",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Sant Pau",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Soternes",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Tormos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Torrefiel",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Tres Forques",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Trinitat",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Valencia, Vara De Quart",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad Valenciana, Vall d'Alba",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vall de Almonacid",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vall de Ebo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vall de Gallinera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vallada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vallanca",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vallat",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vallibona",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vallés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Venta del Moro",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vilafamés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vilamarxant",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vilanova d'Alcolea",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vilar de Canes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villafranca del Cid",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villahermosa del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villajoyosa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villalonga",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villamalur",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villanueva de Castellón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villanueva de Viver",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villar del Arzobispo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villargordo del Cabriel",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villarreal",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villena",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Villores",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vinalesa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vinaròs",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Vistabella del Maestrazgo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Viver",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Xeraco",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Xeresa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Xirivella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Xàtiva",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Yátova",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Zarra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Zorita del Maestrazgo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad Valenciana, Zucaina",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid",
    badge: "Comunidad",
  },
  {
    Merged: "Comunidad de Madrid, Ajalvir",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Alameda del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Alcalá de Henares",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Alcobendas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Alcorcón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Aldea del Fresno",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Algete",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Alpedrete",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Ambite",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Anchuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Aranjuez",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Arganda del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Arroyomolinos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Batres",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Becerril de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Belmonte de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Berzosa del Lozoya",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Boadilla del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Braojos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Brea de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Brunete",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Buitrago del Lozoya",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Bustarviejo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Cabanillas de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Cadalso de los Vidrios",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Camarma de Esteruelas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Campo Real",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Canencia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Carabaña",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Casarrubuelos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Cenicientos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Cercedilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Cervera de Buitrago",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Chapinería",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Chinchón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Ciempozuelos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Cobeña",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Collado Mediano",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Collado Villalba",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Colmenar Viejo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Colmenar de Oreja",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Colmenar del Arroyo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Colmenarejo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Corpa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Coslada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Cubas de la Sagra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Daganzo de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, El Atazar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, El Berrueco",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, El Boalo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, El Escorial",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, El Molar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, El Vellón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, El Álamo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Estremera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Fresnedillas de la Oliva",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Fresno de Torote",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Fuenlabrada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Fuente el Saz de Jarama",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Fuentidueña de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Galapagar",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Garganta de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Gargantilla del Lozoya y Pinilla de Buitrago",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Gascones",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Getafe",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Griñón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Guadalix de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Guadarrama",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Horcajo de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Horcajuelo de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Hoyo de Manzanares",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Humanes de Madrid",
    badge: "Ciudad",
  },
  {
    Merged:
      "Comunidad de Madrid, Jurisdicción Mancomunada de Cerdedilla y Navacerrada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, La Acebeda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, La Cabrera",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, La Hiruela",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, La Serna del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Las Rozas de Madrid",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Leganés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Loeches",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Los Molinos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Los Santos de la Humosa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Lozoya",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Lozoyuela-Navas-Sieteiglesias",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Madarcos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Madrid",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Abrantes",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Acacias",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Adelfas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Aeropuerto",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Alameda De Osuna",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Almagro",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Almenara",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Almendrales",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Aluche",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Amposta",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Apostol Santiago",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Arapiles",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Aravaca",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Arcos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Argüelles",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Atalaya",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Atocha",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Bellas Vistas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Berruguete",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Buenavista",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Butarque",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Campamento",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Canillas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Canillejas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Casa De Campo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Casco Histórico De Barajas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Casco Histórico De Vallecas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Casco Histórico De Vicálvaro",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Castellana",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Castilla",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Castillejos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Chopera",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Ciudad Jardín",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Ciudad Universitaria",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Colina",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Comillas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Concepción",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Corralejos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Cortes",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Costillares",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Cuatro Caminos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Cuatro Vientos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Cármenes",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Delicias",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, El Cañaveral",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, El Goloso",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, El Pardo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, El Plantío",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, El Viso",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Embajadores",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Ensanche De Vallecas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Entrevías",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Estrella",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Fontarrón",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Fuente Del Berro",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Fuentelareina",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Gaztambide",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Goya",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Guindalera",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Hellín",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Hispanoamérica",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Horcajo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Ibiza",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Imperial",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Jerónimos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Justicia",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, La Paz",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Legazpi",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Lista",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Los Rosales",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Los Ángeles",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Lucero",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Marroquina",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Media Legua",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Mirasierra",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Moscardó",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Niño Jesús",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Nueva España",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Numancia",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Opañel",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Orcasitas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Orcasur",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Pacífico",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Palacio",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Palomas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Palomeras Bajas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Palomeras Sureste",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Palos De Moguer",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Pavones",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Peñagrande",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Pilar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Pinar Del Rey",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Piovera",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Portazgo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Pradolongo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Prosperidad",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Pueblo Nuevo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Puerta Bonita",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Puerta Del Ángel",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Quintana",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Recoletos",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Rejas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Rios Rosas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Rosas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Salvador",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, San Cristóbal",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, San Diego",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, San Fermín",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, San Isidro",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, San Juan Bautista",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, San Pascual",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Santa Eugenia",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Simancas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Sol",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Timón",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Trafalgar",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Universidad",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Valdeacederas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Valdebernardo",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Valdefuentes",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Valdemarín",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Valderrivas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Valdezarza",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Vallehermoso",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Valverde",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Ventas",
    badge: "Barrio",
  },
  {
    Merged:
      "Comunidad de Madrid, Madrid, Villaverde Alto, Casco Histórico De Villaverde",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Vinateros",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Vista Alegre",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Zofío",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Madrid, Águilas",
    badge: "Barrio",
  },
  {
    Merged: "Comunidad de Madrid, Majadahonda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Manzanares el Real",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Meco",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Mejorada del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Miraflores de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Montejo de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Moraleja de Enmedio",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Moralzarzal",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Morata de Tajuña",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Móstoles",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Navacerrada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Navalafuente",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Navalagamella",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Navalcarnero",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Navarredonda y San Mamés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Navas del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Nuevo Baztán",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Olmeda de las Fuentes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Orusco de Tajuña",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Paracuellos de Jarama",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Parla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Patones",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Pedrezuela",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Pelayos de la Presa",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Perales de Tajuña",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Pezuela de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Pinilla del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Pinto",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Pinuécar-Gandullas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Pozuelo de Alarcón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Pozuelo del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Prádena del Rincón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Puebla de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Puentes Viejas",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Quijorna",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Rascafría",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Redueña",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Ribatejada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Rivas-Vaciamadrid",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Robledillo de la Jara",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Robledo de Chavela",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Robregordo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Rozas de Puerto Real",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, San Agustín del Guadalix",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, San Fernando de Henares",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, San Lorenzo de El Escorial",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, San Martín de Valdeiglesias",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, San Martín de la Vega",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, San Sebastián de los Reyes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Santa María de la Alameda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Santorcaz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Serranillos del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Sevilla la Nueva",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Somosierra",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Soto del Real",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Talamanca de Jarama",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Tielmes",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Titulcia",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Torrejón de Ardoz",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Torrejón de Velasco",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Torrejón de la Calzada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Torrelaguna",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Torrelodones",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Torremocha de Jarama",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Torres de la Alameda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Tres Cantos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdaracete",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdeavero",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdelaguna",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdemanco",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdemaqueda",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdemorillo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdemoro",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdeolmos-Alalpardo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdepiélagos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdetorres de Jarama",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valdilecha",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Valverde de Alcalá",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Velilla de San Antonio",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Venturada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villa del Prado",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villaconejos",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villalbilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villamanrique de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villamanta",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villamantilla",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villanueva de Perales",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villanueva de la Cañada",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villanueva del Pardillo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villar del Olmo",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villarejo de Salvanés",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villaviciosa de Odón",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Villavieja del Lozoya",
    badge: "Ciudad",
  },
  {
    Merged: "Comunidad de Madrid, Zarzalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura",
    badge: "Comunidad",
  },
  {
    Merged: "Extremadura, Abadía",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Abertura",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Acebo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Acedera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Acehúche",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aceituna",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aceuchal",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Ahigal",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Ahillones",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Alange",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Albalá",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Alburquerque",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Alcollarín",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Alconchel",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Alconera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Alcuéscar",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Alcántara",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aldea del Cano",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aldeacentenera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aldeanueva de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aldeanueva del Camino",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aldehuela de Jerte",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aliseda",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Aljucén",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Almaraz",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Almendral",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Almendralejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Almoharín",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Alía",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Arroyo de San Serván",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Arroyo de la Luz",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Arroyomolinos",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Arroyomolinos de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Atalaya",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Azuaga",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Badajoz",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Barcarrota",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Barrado",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Baños de Montemayor",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Belvís de Monroy",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Benquerencia de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Berlanga",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Berrocalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Berzocana",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Bienvenida",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Bodonal de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Bohonal de Ibor",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Botija",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Brozas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Burguillos del Cerro",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cabañas del Castillo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cabeza del Buey",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cabeza la Vaca",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cabezabellosa",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cabezuela del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cabrero",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Calamonte",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Calera de León",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Calzadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Calzadilla de los Barros",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Caminomorisco",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Campanario",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Campillo de Deleitosa",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Campillo de Llerena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Campo Lugar",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Carbajo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Carcaboso",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Carmonita",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Carrascalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casar de Cáceres",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casar de Palomero",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casares de las Hurdes",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casas de Don Antonio",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casas de Don Gómez",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casas de Don Pedro",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casas de Millán",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casas de Miravete",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casas de Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casas del Castañar",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casas del Monte",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Casatejada",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Castañar de Ibor",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Castilblanco",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Castuera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cañamero",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cañaveral",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Ceclavín",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cedillo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cerezo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cheles",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cilleros",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Collado",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Conquista de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cordobilla de Lácara",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Coria",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Corte de Peleas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cristina",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cuacos de Yuste",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Cáceres",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Deleitosa",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Descargamaría",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Don Benito",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Don Álvaro",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, El Carrascalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, El Gordo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, El Torno",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Eljas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Entrín Bajo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Escurial",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Esparragalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Esparragosa de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Feria",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Fregenal de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Fresnedoso de Ibor",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Fuenlabrada de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Fuente de Cantos",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Fuente del Arco",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Fuente del Maestre",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Fuentes de León",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Galisteo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Garciaz",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Garganta la Olla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Gargantilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Gargüera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Garrovillas de Alconétar",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Gata",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Granja de Torrehermosa",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Guadalupe",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Guareña",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Guijo de Coria",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Guijo de Galisteo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Guijo de Granadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Guijo de Santa Bárbara",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Helechosa de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Herguijuela",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Hernán-Pérez",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Herrera de Alcántara",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Herrera del Duque",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Herreruela",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Hervás",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Higuera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Higuera de Llerena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Higuera de Vargas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Higuera de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Higuera la Real",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Hinojal",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Hinojosa del Valle",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Holguera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Hornachos",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Hoyos",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Ibahernando",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Jaraicejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Jarandilla de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Jaraíz de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Jerez de los Caballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Jerte",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Albuera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Codosera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Coronada",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Garganta",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Garrovilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Granja",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Haba",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Lapa",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Nava de Santiago",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Parra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Pesga",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Roca de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, La Zarza",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Ladrillar",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Llera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Llerena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Lobón",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Logrosán",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Los Santos de Maimona",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Losar de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Madrigal de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Madrigalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Madroñera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Magacela",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Maguilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Majadas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Malcocinado",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Malpartida de Cáceres",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Malpartida de Plasencia",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Malpartida de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Medellín",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Medina de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Membrío",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Mengabril",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Miajadas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Millanes",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Mirabel",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Mirandilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Mohedas de Granadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Monesterio",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Monroy",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Montehermoso",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Montemolín",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Monterrubio de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Montijo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Montánchez",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Moraleja",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Mérida",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Navaconcejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Navalmoral de la Mata",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Navalvillar de Ibor",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Navalvillar de Pela",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Navas del Madroño",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Navezuelas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Nogales",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Nuñomoral",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Oliva de Mérida",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Oliva de Plasencia",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Oliva de la Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Olivenza",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Orellana de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Orellana la Vieja",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Palomero",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Pasarón de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Pedroso de Acim",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Peraleda de San Román",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Peraleda de la Mata",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Peraleda del Zaucejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Perales del Puerto",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Pinofranqueado",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Piornal",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Plasencia",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Plasenzuela",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Portezuelo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Pozuelo de Zarzón",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Puebla de Alcocer",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Puebla de Obando",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Puebla de Sancho Pérez",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Puebla de la Calzada",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Puebla del Maestre",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Puebla del Prior",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Pueblonuevo del Guadiana",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Puerto de Santa Cruz",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Quintana de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Rebollar",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Reina",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Rena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Retamal de Llerena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Ribera del Fresno",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Riolobos",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Robledillo de Trujillo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Robledillo de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Romangordo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Rosalejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Salorino",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Salvaleón",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Salvatierra de Santiago",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Salvatierra de los Barros",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, San Martín de Trevejo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, San Pedro de Mérida",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, San Vicente de Alcántara",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Sancti-Spíritus",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santa Amalia",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santa Ana",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santa Cruz de Paniagua",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santa Cruz de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santa Marta",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santa Marta de Magasca",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santiago de Alcántara",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santiago del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santibáñez el Alto",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Santibáñez el Bajo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Saucedilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Segura de León",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Segura de Toro",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Serradilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Serrejón",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Sierra de Fuentes",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Siruela",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Solana de los Barros",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Talarrubias",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Talavera la Real",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Talaveruela de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Talaván",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Talayuela",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Tejeda de Tiétar",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Toril",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Tornavacas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torre de Don Miguel",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torre de Miguel Sesmero",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torre de Santa María",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torrecilla de los Ángeles",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torrecillas de la Tiesa",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torrejoncillo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torrejón el Rubio",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torremayor",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torremejía",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torremenga",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torremocha",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torreorgaz",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Torrequemada",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Trasierra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Trujillanos",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Trujillo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Táliga",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Usagre",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdastillas",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdecaballeros",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdecañas de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdefuentes",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdehúncar",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdelacalzada",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdelacasa de Tajo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdeobispo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valdetorres",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valencia de Alcántara",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valencia de las Torres",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valencia del Mombuey",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valencia del Ventoso",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valle de Santa Ana",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valle de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valverde de Burguillos",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valverde de Leganés",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valverde de Llerena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valverde de Mérida",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valverde de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Valverde del Fresno",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Viandar de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villa del Campo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villafranca de los Barros",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villagarcía de la Torre",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villagonzalo",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villalba de los Barros",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villamiel",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villanueva de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villanueva de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villanueva de la Vera",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villanueva del Fresno",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villar de Plasencia",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villar del Pedroso",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villar del Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villarta de los Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Villasbuenas de Gata",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Zafra",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Zahínos",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Zalamea de la Serena",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Zarza de Granadilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Zarza de Montánchez",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Zarza la Mayor",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Zarza-Capilla",
    badge: "Ciudad",
  },
  {
    Merged: "Extremadura, Zorita",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia",
    badge: "Comunidad",
  },
  {
    Merged: "Galicia, A Arnoia",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Baña",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Bola",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Capela",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Cañiza",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Coruña",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Estrada",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Fonsagrada",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Guarda",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Gudiña",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Illa de Arousa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Lama",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Laracha",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Merca",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Mezquita",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Pastoriza",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Peroxa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Pobra de Trives",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Pobra do Brollón",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Pobra do Caramiñal",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Pontenova",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Rúa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Teixeira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, A Veiga",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Abadín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Abegondo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Agolada",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Alfoz",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Allariz",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ames",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Amoeiro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Antas de Ulla",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Aranga",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Arbo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ares",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Arteixo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Arzúa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, As Neves",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, As Nogais",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, As Pontes de García Rodríguez",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, As Somozas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Avión",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Baiona",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Baleira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Baltar",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Bande",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Baralla",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Barbadás",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Barreiros",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Barro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Baños de Molgas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Beade",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Beariz",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Becerreá",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Begonte",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Bergondo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Betanzos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Boborás",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Boimorto",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Boiro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Boqueixón",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Brión",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Bueu",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Burela",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Bóveda",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cabana de Bergantiños",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cabanas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Caldas de Reis",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Calvos de Randín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Camariñas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cambados",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cambre",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Campo Lameiro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cangas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Carballeda de Avia",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Carballeda de Valdeorras",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Carballedo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Carballo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cariño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Carnota",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Carral",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cartelle",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Castrelo de Miño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Castrelo do Val",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Castro Caldelas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Castro de Rei",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Castroverde",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Catoira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cedeira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cee",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Celanova",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cenlle",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cerceda",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cerdedo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cerdido",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cervantes",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cervo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cesuras",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Chandrexa de Queixa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Chantada",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Coirós",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Coles",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Corcubión",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Coristanco",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cortegada",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cospeito",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cotobade",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Covelo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Crecente",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cualedro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Culleredo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Cuntis",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Curtis",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Dodro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Dozón",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Dumbría",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Entrimo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Esgos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Fene",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ferrol",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Fisterra",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Folgoso do Courel",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Forcarei",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Fornelos de Montes",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Foz",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Frades",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Friol",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Gomesende",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Gondomar",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Guitiriz",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Guntín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Irixoa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Lalín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Larouco",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Laxe",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Laza",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Leiro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Lobeira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Lobios",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Lourenzá",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Lousame",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Lugo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Láncara",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Maceda",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Malpica de Bergantiños",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Manzaneda",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Marín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Maside",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Mazaricos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Mañón",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Meaño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Meira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Meis",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Melide",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Melón",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Mesía",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Miño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Moaña",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Moeche",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Mondariz",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Mondariz-Balneario",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Mondoñedo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Monfero",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Monforte de Lemos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Montederramo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Monterrei",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Monterroso",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Moraña",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Mos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Mugardos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Muras",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Muros",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Muxía",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Muíños",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Narón",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Navia de Suarna",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Neda",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Negreira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Nigrán",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Nogueira de Ramuín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Noia",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Barco de Valdeorras",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Bolo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Carballiño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Corgo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Grove",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Incio",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Irixo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Pereiro de Aguiar",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Pino",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Porriño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Páramo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Rosal",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Saviñao",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Valadouro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, O Vicedo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Oia",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Oleiros",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ordes",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Oroso",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ortigueira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Os Blancos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ourense",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ourol",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Outeiro de Rei",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Outes",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Oza dos Ríos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Paderne",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Paderne de Allariz",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Padrenda",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Padrón",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Palas de Rei",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Pantón",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Parada de Sil",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Paradela",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Pazos de Borbén",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Pedrafita do Cebreiro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Petín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Piñor",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Poio",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Pol",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ponte Caldelas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ponteareas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ponteceso",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Pontecesures",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Pontedeume",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Pontedeva",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Pontevedra",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Porqueira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Portas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Porto do Son",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Portomarín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Punxín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Quintela de Leirado",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Quiroga",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Rairiz de Veiga",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ramirás",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Redondela",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Rianxo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ribadavia",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ribadeo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ribadumia",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ribas de Sil",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ribeira",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Ribeira de Piquín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Riotorto",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Riós",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Rodeiro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Rois",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Rubiá",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Rábade",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Sada",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Salceda de Caselas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Salvaterra de Miño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Samos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, San Amaro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, San Cibrao das Viñas",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, San Cristovo de Cea",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, San Sadurniño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, San Xoán de Río",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Sandiás",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Santa Comba",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Santiago de Compostela",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Santiso",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Sanxenxo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Sarreaus",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Sarria",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Silleda",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Sober",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Sobrado",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Soutomaior",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Taboada",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Taboadela",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Teo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Tomiño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Toques",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Tordoia",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Touro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Toén",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Trabada",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Trasmiras",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Trazo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Triacastela",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Tui",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Val do Dubra",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Valdoviño",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Valga",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vedra",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Verea",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Verín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Viana do Bolo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vigo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vila de Cruces",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilaboa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilagarcía de Arousa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilalba",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilamartín de Valdeorras",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilamarín",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilanova de Arousa",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilar de Barrio",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilar de Santos",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilardevós",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilariño de Conso",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilarmaior",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vilasantar",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Vimianzo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Viveiro",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Xermade",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Xinzo de Limia",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Xove",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Xunqueira de Ambía",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Xunqueira de Espadanedo",
    badge: "Ciudad",
  },
  {
    Merged: "Galicia, Zas",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares",
    badge: "Comunidad",
  },
  {
    Merged: "Islas Baleares, Alaior",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Alaró",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Alcúdia",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Algaida",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Andratx",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Ariany",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Artà",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Banyalbufar",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Binissalem",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Bunyola",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Búger",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Calvià",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Campanet",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Campos",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Capdepera",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Ciutadella de Menorca",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Consell",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Costitx",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Deyá",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Eivissa",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Es Castell",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Es Mercadal",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Es Migjorn Gran",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Escorca",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Esporles",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Estellencs",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Felanitx",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Ferreries",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Formentera",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Fornalutx",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Inca",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Lloret de Vistalegre",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Lloseta",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Llubí",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Llucmajor",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Mahón",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Manacor",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Mancor de la Vall",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Maria de la Salut",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Marratxí",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Montuïri",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Muro",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Aeropuerto",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Amanecer",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Archiduque",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Bellver",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Bons Aires",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Cala Major",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Camp D'En Serralta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Camp Redó",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Can Capes",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Can Pastilla",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Can Pere Antoni",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Cas Capiscol",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Casa Blanca",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Cort",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, El Arenal",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, El Coll D'En Rabassa",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, El Molinar",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, El Pilarín",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, El Secar De La Real",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, El Terreno",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, El Viver",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Els Hostalets",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Es Fortí",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Establiments",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Estadí Balear",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Foners",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Genova",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Jaime Iii",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Bonanova",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Calatrava",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Indiotería (Rural)",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Indiotería (Urbano)",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Lonja-Borne",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Missió",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Seu",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Soledat (Nord)",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, La Soledat (Sud)",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Las Maravillas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Los Almendros-Son Pacs",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Marqués De La Fontsanta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Mercat",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Monti-Sion",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Pere Garau",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Plaza De Toros",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Plaça Dels Patins",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Poligon De Llevant",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Portopí",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Puig De Sant Pere",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Rafal Nou",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Rafal Vell",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, S'Aranjassa",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, S'Olivera",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Sa Teulera",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Sant Agustí",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Sant Jaume",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Sant Jordi",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Sant Nicolau",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Santa Catalina",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Sindicat",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Anglada",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Armadans",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Canals",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Cladera",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Cotoner",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Dameto",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Dureta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Espanyol",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Espanyolet",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Flor",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Fortesa (Nord)",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Fortesa (Sud)",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Gloteu",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Malferit",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Oliva",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Pereto",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Rapinya",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Riera",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Roca",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Ruilan",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Sardina",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Serra La-Vileta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Vida",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Xigala",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Son Ximelis",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Verce De Lluch",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Palma de Mallorca, Zona Porturaria",
    badge: "Barrio",
  },
  {
    Merged: "Islas Baleares, Petra",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Pollença",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Porreres",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Puigpunyent",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sa Pobla",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sant Antoni de Portmany",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sant Joan",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sant Joan de Labritja",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sant Josep de sa Talaia",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sant Llorenç des Cardassar",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sant Lluís",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Santa Eugènia",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Santa Eulalia del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Santa Margalida",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Santa María del Camí",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Santanyí",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Selva",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sencelles",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Ses Salines",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sineu",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Son Servera",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Sóller",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Valldemossa",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Baleares, Vilafranc de Bonany",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias",
    badge: "Comunidad",
  },
  {
    Merged: "Islas Canarias, Adeje",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Agaete",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Agulo",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Agüimes",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Alajeró",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Antigua",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Arafo",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Arico",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Arona",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Arrecife",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Artenara",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Arucas",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Barlovento",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Betancuria",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Breña Alta",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Breña Baja",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Buenavista del Norte",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Candelaria",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, El Paso",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, El Rosario",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, El Sauzal",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, El Tanque",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Fasnia",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Firgas",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Frontera",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Fuencaliente de la Palma",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Garachico",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Garafía",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Granadilla de Abona",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Guía de Isora",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Gáldar",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Güímar",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Haría",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Hermigua",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Icod de los Vinos",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Ingenio",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, La Guancha",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, La Matanza de Acentejo",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, La Oliva",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, La Orotava",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, La Victoria de Acentejo",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Alacaravaneras",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Altavista",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Amatriche Alto",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Amatriche Bajo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Campus Universitario",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Canalejas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Casa Ayala",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Casablanca I",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Casablanca Iii",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Cañada Honda",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Chumber",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Ciudad Del Campo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Ciudad Del Mar",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Ciudad Jardin",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Costa Ayala",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Cruz Del Ovejero",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Cuesta Ramón",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Cuevas Blancas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Cuevas Torres",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Diaz Casanova",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Don Zoilio",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Dragonal Alto",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Dragonal Bajo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Batan",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Cardón",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Fondillo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Lasso",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Pintor",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Roman",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Secadero",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Toscon",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, El Zardo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Escaleritas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Fincas Unidas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Guanarteme",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Hoya Andrea",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Hoya De La Plata",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Isla Perdida",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Jinamar",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Calzada",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Cantera",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Cazuela",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Data",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Feria",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Galera",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Isleta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Milagrosa",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Minilla",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Montañeta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Palma",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Paterna",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, La Suerte",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Ladera Alta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Las Cuevas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Las Majadillas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Las Mesas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Las Perreras",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Las Rehoyas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Las Torres",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Llanos De Las Nieves",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Llanos De Mte Rivera",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Lllanos De La Barrera",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Lomo Apolinaro",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Lomo Blanco",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Lomo De Enmedio",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Lomo Del Sabinal",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Lomo Los Frailes",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Lomo Verdejo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Los Giles",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Los Hoyos",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Los Tarahales",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Lugo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Marzagan",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Mercalaspalmas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Miller",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Miller Industrial",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Monte Luz",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Monte Quemado",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Pedro Hidalgo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Pico Viento",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Piletas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Rehoyas Altas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Risco Negro",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Salto El Negro",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, San Antonio",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, San Cristobal",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, San Fco De Paula",
    badge: "Barrio",
  },
  {
    Merged:
      "Islas Canarias, Las Palmas de Gran Canaria, San Francisco-San Nicolas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, San José Del Alamo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, San Juan - San José",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, San Lazaro",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, San Lorenzo",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, San Roque",
    badge: "Barrio",
  },
  {
    Merged:
      "Islas Canarias, Las Palmas de Gran Canaria, Santa Catalina-Canteras",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Santa Margarita",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Schamann",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Siete Puertas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Tamaraceite",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Tarifa Alta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Tarifa Baja",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Tenoya",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Torres Industriales",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Tres Palmas",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Triana",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Vega De San José",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Vegueta",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Zarate",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Las Palmas de Gran Canaria, Zurbaran",
    badge: "Barrio",
  },
  {
    Merged: "Islas Canarias, Los Llanos de Aridane",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Los Realejos",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Los Silos",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Mogán",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Moya",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Puerto de la Cruz",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Puerto del Rosario",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Puntagorda",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Puntallana",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Pájara",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, San Andrés y Sauces",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, San Bartolomé",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, San Bartolomé de Tirajana",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, San Cristóbal de La Laguna",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, San Juan de la Rambla",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, San Miguel de Abona",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, San Nicolás de Tolentino",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, San Sebastián de la Gomera",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Santa Brígida",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Santa Cruz de Tenerife",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Santa Cruz de la Palma",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Santa Lucía de Tirajana",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Santa María de Guía de Gran Canaria",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Santa Úrsula",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Santiago del Teide",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Tacoronte",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Tazacorte",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Tegueste",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Teguise",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Tejeda",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Telde",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Teror",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Tijarafe",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Tinajo",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Tuineje",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Tías",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Valle Gran Rey",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Vallehermoso",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Valleseco",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Valsequillo de Gran Canaria",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Valverde",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Vega de San Mateo",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Vilaflor",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Villa de Mazo",
    badge: "Ciudad",
  },
  {
    Merged: "Islas Canarias, Yaiza",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja",
    badge: "Comunidad",
  },
  {
    Merged: "La Rioja, Agoncillo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Aguilar del Río Alhama",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Albelda de Iregua",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Alberite",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Alcanadre",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Aldeanueva de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Alesanco",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Alesón",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Alfaro",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Almarza de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Anguciana",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Anguiano",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Arenzana de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Arenzana de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Arnedillo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Arnedo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Arrúbal",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ausejo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Autol",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Azofra",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Badarán",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Bañares",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Baños de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Baños de Río Tobía",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Berceo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Bergasa",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Bezares",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Bobadilla",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Briones",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Briñas",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cabezón de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Calahorra",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Camprovín",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Canillas de Río Tuerto",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Casalarreina",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Castañares de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Castroviejo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cañas",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cellorigo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cenicero",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cervera del Río Alhama",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cidamón",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cihuri",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cirueña",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Clavijo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cordovín",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Corera",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cornago",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Corporales",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cuzcurrita de Río Tirón",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Cárdenas",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Daroca de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, El Rasillo de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, El Redal",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, El Villar de Arnedo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Enciso",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Entrena",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Estollo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ezcaray",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Foncea",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Fonzaleche",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Fuenmayor",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Galbárruli",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Galilea",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Gimileo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Grañón",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Grávalos",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Haro",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Herce",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Herramélluri",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Hervías",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Hormilla",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Hormilleja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Hornillos de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Hornos de Moncalvillo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Huércanos",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Igea",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Lagunilla del Jubera",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Lardero",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ledesma de la Cogolla",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Leiva",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Leza de Río Leza",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Logroño",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Lumbreras",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Manjarrés",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Mansilla de la Sierra",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Manzanares de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Matute",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Medrano",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Munilla",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Murillo de Río Leza",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Muro de Aguas",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Muro en Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Nalda",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Navarrete",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Nestares",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Nieva de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Nájera",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ochánduri",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ocón",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ojacastro",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ollauri",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ortigosa de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Pedroso",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Pradejón",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Préjano",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Quel",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Rabanera",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ribafrecha",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Rincón de Soto",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Rodezno",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Sajazarra",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, San Asensio",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, San Millán de la Cogolla",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, San Román de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, San Torcuato",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, San Vicente de la Sonsierra",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Santa Coloma",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Santa Engracia del Jubera",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Santa Eulalia Bajera",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Santo Domingo de la Calzada",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Santurde de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Santurdejo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Sojuela",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Sorzano",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Soto en Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Sotés",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Terroba",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Tirgo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Tobía",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Tormantos",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Torrecilla en Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Torrecilla sobre Alesanco",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Treviana",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Tricio",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Tudelilla",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Uruñuela",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Valgañón",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ventosa",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ventrosa",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Viguera",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Villalba de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Villalobar de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Villamediana de Iregua",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Villar de Torre",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Villarejo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Villarta-Quintana",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Villaverde de Rioja",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Villoslada de Cameros",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Viniegra de Abajo",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Zarratón",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Zorraquín",
    badge: "Ciudad",
  },
  {
    Merged: "La Rioja, Ábalos",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco",
    badge: "Comunidad",
  },
  {
    Merged: "País Vasco, Abadiño",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Abaltzisketa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Abanto y Ciérvana-Abanto Zierbena",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Aduna",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Aia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Aizarnazabal",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ajangiz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Albiztur",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Alegia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Alegría-Dulantzi",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Alkiza",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Alonsotegi",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Altzaga",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Altzo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Amezketa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Amorebieta-Etxano",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Amoroto",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Amurrio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Andoain",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Anoeta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Antzuola",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arakaldo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arama",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Aramaio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arantzazu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Areatza",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Aretxabaleta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Armiñón",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arraia-Maeztu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arrankudiaga",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arrasate",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arratzu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arrazua-Ubarrundia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arrieta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Arrigorriaga",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Artea",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Artzentales",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Artziniega",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Asparrena",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Asteasu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Astigarraga",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ataun",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Atxondo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Aulesti",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ayala",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Azkoitia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Azpeitia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Añana",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Bakio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Baliarrain",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Balmaseda",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Barakaldo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Barrika",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Barrundia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Basauri",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Baños de Ebro",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Beasain",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Bedia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Beizama",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Belauntza",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Berango",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Berantevilla",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Berastegi",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Bergara",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Bermeo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Bernedo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Berriatua",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Berriz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Berrobi",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Bidegoian",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Bilbao",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Bilbao, Abandoibarra-Guggenheim",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Albia",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Alhondiga",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Altamira- Monte Caramelo",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Ametzola",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Arabella",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Artatzu-Larraskitu",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Atxuri",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Basurtu",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Begoña",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Bilbao La Vieja",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Bolueta",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Campo Volantín-Castaños",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Campuzano",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Ciudad Jardín",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Ensanche-Moyua",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Irala",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Iturralde",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, La Peña",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, La Ribera-Ibarrekolanda",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Mirador De Bilbao-Maurice Ravel",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Miribilla",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Plaza Circular",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Rekalde Centro",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Sabino Arana-Jesuitas",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, San Adrián",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, San Francisco",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, San Pedro De Deusto-Arangoit",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Santutxu-Basarrate",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Solokoetxe",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Uretamendi-Betolaza-Peñaskal",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Uribarri",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Zabala",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Zabalburu-Diputación",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Zona Indautxu",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Zorrotza-Olabeaga",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Bilbao, Zurbarán",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Busturia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Deba",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Derio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Dima",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Aiete",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Altza",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Amaraberri",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Antigua",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Ategorrieta - Ulia",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Añorga",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Egia",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Erdialdea",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Gros",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Ibaeta",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Igeldo",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Intxaurrondo",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Loiola",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Martutene",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Mirakruz - Bidebieta",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Miramon - Zorroaga",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Donostia-San Sebastián, Zubieta",
    badge: "Barrio",
  },
  {
    Merged: "País Vasco, Durango",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ea",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Eibar",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Elantxobe",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Elburgo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Elciego",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Elduain",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Elgeta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Elgoibar",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Elorrio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Elvillar",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Erandio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ereño",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ermua",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Errenteria",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Errezil",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Errigoiti",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Eskoriatza",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Eskuernaga",
    badge: "Ciudad",
  },
  {
    Merged:
      "País Vasco, Etxebarri, Anteiglesia de San Esteban-Etxebarri Doneztebeko Elizatea",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Etxebarria",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ezkio-Itsaso",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Forua",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Fruiz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gabiria",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gaintza",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Galdakao",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Galdames",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gamiz-Fika",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Garay",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gatika",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gautegiz Arteaga",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gaztelu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gernika-Lumo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Getaria",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Getxo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gizaburuaga",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gordexola",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gorliz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Gúeñes",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Harana",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Hernani",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Hernialde",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Hondarribia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ibarra",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ibarrangelu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Idiazabal",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Igorre",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ikaztegieta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Irun",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Irura",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Iruraiz-Gauna",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Iruña Oka",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ispaster",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Itsasondo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Iurreta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Izurtza",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Kanpezu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Karrantza Harana",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Kortezubi",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Kripan",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Kuartango",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Labastida",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lagrán",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Laguardia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lanciego",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lanestosa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lantarón",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lapuebla de Labarca",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Larrabetzu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Larraul",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lasarte-Oria",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Laukiz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lazkao",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Leaburu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Legazpi",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Legorreta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Legutiano",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Leintz-Gatzaga",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Leioa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lekeitio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lemoa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lemoiz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Leza",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lezama",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lezo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Lizartza",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Llodio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Loiu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mallabia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Markina-Xemein",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Maruri-Jatabe",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mañaria",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mendaro",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mendata",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mendexa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Meñaka",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Moreda de Álava",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Morga",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mundaka",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mungai",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Munitibar-Arbatzegi Gerrikaitz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Murueta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Muskiz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mutiloa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Mutriku",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Muxika",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Nabarniz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Navaridas",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Oiartzun",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Okondo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Olaberria",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ondarroa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ordizia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Orendain",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Orio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ormaiztegi",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Orozko",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ortuella",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Otxandio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Oyón",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Oñati",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Pasaia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Peñacerrada-Urizaharra",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Plentzia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Portugalete",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ribera Alta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ribera Baja",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Salvatierra",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Samaniego",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, San Millán",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Santurtzi",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Segura",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Sestao",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Sondika",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Sopelana",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Sopuerta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Soraluze",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Sukarrieta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Tolosa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Trucios-Turtzioz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ubide",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Ugao-Miraballes",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Urduliz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Urduña-Orduña",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Urkabustaiz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Urnieta",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Urretxu",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Usurbil",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Valdegovía",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Valle de Trápaga-Trapagaran",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Villabona",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Vitoria-Gasteiz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Yécora",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zaldibar",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zaldibia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zalduondo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zalla",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zambrana",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zamudio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zaratamo",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zarautz",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zeanuri",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zeberio",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zegama",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zerain",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zestoa",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zierbena",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zigoitia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zizurkil",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zuia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zumaia",
    badge: "Ciudad",
  },
  {
    Merged: "País Vasco, Zumarraga",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias",
    badge: "Comunidad",
  },
  {
    Merged: "Principado de Asturias, Allande",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Aller",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Amieva",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Avilés",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Belmonte de Miranda",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Bimenes",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Boal",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Cabrales",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Cabranes",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Candamo",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Cangas de Onís",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Cangas del Narcea",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Caravia",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Carreño",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Caso",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Castrillón",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Castropol",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Coaña",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Colunga",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Corvera de Asturias",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Cudillero",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Degaña",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, El Franco",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Gijón",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Gozón",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Grado",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Grandas de Salime",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Ibias",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Illano",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Illas",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Langreo",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Las Regueras",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Laviana",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Lena",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Llanera",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Llanes",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Mieres",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Morcín",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Muros de Nalón",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Nava",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Navia",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Noreña",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Onís",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Oviedo",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Parres",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Pesoz",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Peñamellera Alta",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Peñamellera Baja",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Piloña",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Ponga",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Pravia",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Proaza",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Quirós",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Ribadedeva",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Ribadesella",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Ribera de Arriba",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Riosa",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Salas",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, San Martín de Oscos",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, San Martín del Rey Aurelio",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, San Tirso de Abres",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Santa Eulalia de Oscos",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Santo Adriano",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Sariego",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Siero",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Sobrescobio",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Somiedo",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Soto del Barco",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Tapia de Casariego",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Taramundi",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Teverga",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Tineo",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Valdés",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Vegadeo",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Villanueva de Oscos",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Villaviciosa",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Villayón",
    badge: "Ciudad",
  },
  {
    Merged: "Principado de Asturias, Yernes y Tameza",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia",
    badge: "Comunidad",
  },
  {
    Merged: "Región de Murcia, Abanilla",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Abarán",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Albudeite",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Alcantarilla",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Aledo",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Alguazas",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Alhama de Murcia",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Archena",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Beniel",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Blanca",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Bullas",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Calasparra",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Campos del Río",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Caravaca de la Cruz",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Cartagena",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Cehegín",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Ceutí",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Cieza",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Fortuna",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Fuente Álamo de Murcia",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Jumilla",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, La Unión",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Las Torres de Cotillas",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Librilla",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Lorca",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Lorquí",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Los Alcázares",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Mazarrón",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Molina de Segura",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Moratalla",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Mula",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Murcia",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Murcia, Calle Cartagena",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Carretera De El Alicante",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Carretera De El Palmar-Alcantarilla",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Centro",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, El Carmen",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Ensanche Norte",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Espinardo",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Infante Juan Manuel",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, La Fama-Condomina",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, La Flota",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, La Paz",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Puente Tocinos",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Ronda Norte-Plaza Circular",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Ronda Sur",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, San Andrés-San Antﾃｳn-San Antolín",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, San Basilio",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Santa María De Gracia",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Santiago El Mayor-San Pﾃｭo X",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Vista Alegre",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Murcia, Vistabella",
    badge: "Barrio",
  },
  {
    Merged: "Región de Murcia, Ojós",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Pliego",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Puerto Lumbreras",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Ricote",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, San Javier",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, San Pedro del Pinatar",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Santomera",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Torre-Pacheco",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Totana",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Ulea",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Villanueva del Río Segura",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Yecla",
    badge: "Ciudad",
  },
  {
    Merged: "Región de Murcia, Águilas",
    badge: "Ciudad",
  },
];

console.log(data);
// Manipulate the data
const new_data = data.map((item) => {
  if (item.badge === "Comunidad") {
    return {
      community: item.Merged,
      city: "",
      neighbourhood: "",
    };
  } else if (item.badge === "Ciudad") {
    const arr = item.Merged.split(",");

    return {
      community: arr[0],
      city: arr[1],
      neighbourhood: "",
    };
  } else if (item.badge === "Barrio") {
    const arr = item.Merged.split(",");
    return {
      community: arr[0],
      city: arr[1].trim(),
      neighbourhood: arr[2].trim(),
    };
  }
});

// Store the modified data into a new file
fs.writeFile("data.js", JSON.stringify(new_data), (err) => {
  if (err) throw err;
  console.log("New data saved!");
});
