const history = {
    idyear1984: {
        year: 1984,
        months: {
            january: "The first Apple Macintosh went on sale.",
            february: "Iraqi aviation begins bombing civilian targets in Iran.",
            march: "The Soviet nuclear submarine K-314 and the American aircraft carrier Kitty Hawk collided in the Sea of Japan.",
            april: "Launch of the Soviet spacecraft Soyuz T-11.",
            may: "The International Court of Justice in The Hague rules that the United States must end its blockade of Nicaraguan seaports.",
            june: "Soviet programmer Alexei Pajitnov introduced the computer game Tetris.",
            july: "First spacewalk by a female astronaut.",
            august: "In Manila, 500 thousand people took to the streets to protest against the regime of Ferdinand Marcos.",
            september: "China and the UK signed an agreement to hand over Hong Kong to China in 1997.",
            october: "The Terminator movie was released in the USA.",
            november: "The United States restores diplomatic relations with Iraq in full (interrupted in 1967).", 
            december: "Bhopal Disaster: A methyl isocyanate (MIC) leak at a Union Carbide plant in Bhopal, India, killed more than 3,000 people immediately and between 15,000 and 22,000 died later as a result of the accident."
        }
    },
    idyear1985: {
        year: 1985,
        months: {
            january: "First top-level domains registered: .arpa, .com, .edu, .gb, .gov, .mil, .net, .org, .us.",
            february: "Israel has begun withdrawing troops from Lebanon.",
            march: "Plenum of the Central Committee of the CPSU elected Mikhail Gorbachev General Secretary of the Central Committee of the CPSU.",
            april: "The Warsaw Pact has been extended for 30 years.",
            may: "For the first time published information about the discovery of the ozone hole over the South Pole.",
            june: "In the United States, the Discovery TV channel began broadcasting.",
            july: "Natural disaster in Italy, the Val di Stava dam was destroyed, 268 people died.",
            august: "In Japan, a Boeing 747 crashed into a mountain, killing 520 people. In terms of the number of deaths, this disaster was the largest disaster in the history of a single aircraft.",
            september: "8.1 magnitude earthquake in Mexico City. More than 9,000 people died, about 30,000 were injured, and about 95,000 lost their homes.",
            october: "The Nintendo Entertainment System was released to the US market.",
            november: "Microsoft released Windows 1.0.", 
            december: "The Novosibirsk Metro was opened, the first metro in Siberia."
        }
    },
    idyear1986: {
        year: 1986,
        months: {
            january: "First recorded computer virus Brain.",
            february: "Opening of the Pixar studio.",
            march: "The Japanese research probe Suisei, sent to Halley's comet, took pictures of it in the ultraviolet spectrum.",
            april: "Explosion of the reactor of the 4th power unit of the Chernobyl nuclear power plant, the largest man-made accident",
            may: "The 1986 World Exhibition opened in Vancouver (Canada).",
            june: "In the final of the World Cup, Argentina defeated Germany.",
            july: "As a result of a forced landing in a forest 75 kilometers from Syktyvkar, a Tu-134AK aircraft crashed, killing 54 out of 92 people on board.",
            august: "The first Grand Prix of a Formula One World Championship took place in a socialist country, the 1986 Hungarian Grand Prix.",
            september: "Due to investors' fears of a sharp increase in inflation, the New York Stock Exchange experienced a landslide drop in stock prices - the largest since 1929.",
            october: "The Big Bang on the London Stock Exchange abolished fixed fees and paved the way for electronic trading.",
            november: "In the USSR, the law 'On individual labor activity' was adopted, designed to put under the control of state bodies the already really existing 'underground' private business.", 
            december: "The beginning of riots in the Kazakh SSR caused by the resignation of the head of the republic Dinmukhamed Kunaev."
        }
    },
    idyear1987: {
        year: 1987,
        months: {
            january: "In Leningrad, the lowest sustained temperature was recorded (up to -34.7 °C).",
            february: "The Council of Ministers of the USSR issued a resolution 'On the establishment of cooperatives for the production of consumer goods.'",
            march: "He made the first flight of the Yak-141 - the world's first supersonic multipurpose vertical takeoff and landing aircraft.",
            april: "Portugal and China signed an agreement under which Macau should be returned to China in 1999.",
            may: "In the United States, for the first time, a heart-lung machine was used.",
            june: "The last Dark Coast Sparrow has died.",
            july: "The world's population has reached 5 billion people.",
            august: "Perestroika: for the first time unlimited subscription to newspapers and magazines in the USSR.",
            september: "Huawei is founded.",
            october: "For the first time, the Vzglyad program aired on the air of the central television of the USSR.",
            november: "Microsoft releases Microsoft Windows 2.0", 
            december: "A tsunami hit the Gulf of Alaska."
        }
    },
    idyear1988: {
        year: 1988,
        months: {
            january: "In Leningrad, the lowest sustained temperature was recorded (up to -34.7 °C).",
            february: "The Council of Ministers of the USSR issued a resolution 'On the establishment of cooperatives for the production of consumer goods.'",
            march: "He made the first flight of the Yak-141 - the world's first supersonic multipurpose vertical takeoff and landing aircraft.",
            april: "Portugal and China signed an agreement under which Macau should be returned to China in 1999.",
            may: "In the United States, for the first time, a heart-lung machine was used.",
            june: "The last Dark Coast Sparrow has died.",
            july: "The world's population has reached 5 billion people.",
            august: "Perestroika: for the first time unlimited subscription to newspapers and magazines in the USSR.",
            september: "Huawei is founded.",
            october: "For the first time, the Vzglyad program aired on the air of the central television of the USSR.",
            november: "Microsoft releases Microsoft Windows 2.0", 
            december: "A tsunami hit the Gulf of Alaska."
        }
    }
}

let yearSaveSave = localStorage.getItem('year');
yearObject = 'idyear' + yearSaveSave;
let keyMonth = 1;
let counter = 1;
const numsIdD = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december'
}
let keyM = numsIdD[keyMonth];
Object.values(history).forEach(element => {
    Object.values(numsIdD).forEach(elements => {
        if (counter == 1) {
            console.log(element.year)
        } else if (counter == 13) {
            counter = 1;
            console.log(element.year)
        }
        console.log(element.months[elements]); 
        counter += 1;
    });
});
