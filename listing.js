$(document).ready(function (){

  var map = {
      Markov: {
        name: 'Markov',
        title: 'Markov Data Game',
        description: "Play Roshambo agains the evil Dr. Markov. If you win, you can save Madeline the dog. Improve you odds by analyzing Markov's moves in a graph.",
        path: 'markov/Markov_Sample.json'
      },
      Climate_Change: {
        name: 'Climate_Change',
        title: "Climate Change",
        description: "This is a simulation model of Climate Changes.",
        path: 'Climate_Change/Climate-Change-A.json'
      },
      Four_Seals: {
        name: 'Four_Seals',
        title: 'Four Seals',
        description:'Display the tracks of four elephant seals in the Pacific on a map. Make graphs and use selection to help determine what is going on.',
        path: 'four-seals/four-seals.json'
      },
      Mammals: {
        name: 'Mammals',
        title:'Mammal',
        description:'There are 27 mammals, each with eight attributes. Which of the mammals has the longest life span? Sleeps the most? What relationships can you find?',
        path: 'mammals/Mammals_Sample.json'
      },
      Parachute: {
        name: 'Parachute_Model',
        title: 'Parachute Model',
        description: "Experiment dropping a parachute to see how changing the parachute's size and mass of its cargo changes the terminal velocity of the drop.",
        path: 'parachute/Parachute_Model_Sample.json'
      },
      States_And_People: {
        name: 'States_and_People',
        title: 'States and Education',
        description: "These are data gathered from the Minnesota Population Center. It provides aggregate information for the United States. What do you notice about the education levels within each state?",
        path: 'statesnpeople/States_and_Education.json'
      },
      Education_API: {
        name:'CA_HS_APIs',
        title: '1999 API for all California High Schools',
        description:"Has 1999 APIs for all California High Schools",
        path: 'FathomDocs/Education/API_All_CA_HS_1999/API_All_CA_HS_1999.json'
      },
      Education_Calc_Grades: {
        name: 'Calculus_Grades',
        title:'Calculus Grades',
        description: "Grades recorded during several years for a Calculus 2 course at the Instituto Tecnológico de Costa Rica",
        path: 'FathomDocs/Education/Calc_Grades/Grades_Calc.json'
      },
      Education_Faculty_Salaries: {
        name: 'Faculty_Salaries',
        title: "Faculty Salaries",
        description: "Salaries of College faculty , in the 2002-2003 academic year",
        path: 'FathomDocs/Education/Faculty_Salaries/Faculty_Salaries.json'
      },
      Education_ITCR_Students: {
        name: 'ITCR_Students',
        title: 'ITCR Students Info',
        description: "Results from polls taken in 1993, 1994, 2000 and 2003 among students of the Instituto Tecnológico de Costa Rica.",
        path: 'FathomDocs/Education/ITCR_Students.json'
      },
      Education_School_Children: {
        name: 'School_Children',
        title: "School Children Info",
        description:"Age (months), height (inches), and weight (pounds) were recorded for a group of school children.",
        path: 'FathomDocs/Education/School_Children/School_Children.json'
      },
      Education_Six_Tests: {
        name: 'Six_Tests',
        title: "Six Tests",
        description: "Do students who take standardized tests multiple times have an advantage over those who just take them once or twice?",
        path: 'FathomDocs/Education/Six_Tests/Six_Tests.json'
      },
      Education_School_Enrollments: {
        name: 'Public_School_Enrollments',
        title: "Public School Enrollments",
        description: "Enrollment in public elementary and secondary schools, by state or jurisdiction: Fall 1988 to Fall 2010.",
        path: 'FathomDocs/Education/State_Public_School_Enrollments/Public_School_Enrollments.json'
      },
      Education_Education_Spending: {
        name: 'State_Education_Spending',
        title: "Education Spending by State",
        description: "How much money each state spent on education from 1969 to 2000",
        path: 'FathomDocs/Education/States_EdSpending/States_EdSpending.json'
      },
      Education_Stats_Grades: {
        name: 'Stats_Grades',
        title: "Stats Grades",
        description: "Grades recorded during several years for a Statistics course at the Instituto Tecnológico de Costa Rica, with one case per student",
        path: 'FathomDocs/Education/Stats_Grades/Stats_Grades.json'
      },
      Education_Students_Grades: {
        name: "Students_Grades",
        title: "Students' Grades",
        description:"Grades obtained by students in the author's classes at the Instituto Tecnológico de Costa Rica.",
        path: "FathomDocs/Education/Students'_Grades/Students'_Grades.json"
      },
      Education_TAMU_Business: {
        name: 'TAMU_Business',
        title: "Texas A and M Univ Business Students' Grades",
        description: "Grades obtained by Business students at Texas A and M University during the years 1989-1992.",
        path: 'FathomDocs/Education/TAMU_Business/TAMU_Business.json'
      },
      Education_Visits: {
        name: 'Visits',
        title: "Visits",
        description: "Visits of students to author's office hours.",
        path: 'FathomDocs/Education/Visits/Visits.json'
      },
      LA_2000_Words: {
        name: '2000_Words',
        title: "2000 Words",
        description: "2000 words randomly chosen from the YAWL (yet another word list) that comes with the Unix operating system.",
        path: 'FathomDocs/LanguageArts/2000_Words/2000_Words.json'
      },
      LA_Art_Paintings: {
        name: 'Art_Paintings',
        title: "Art Paintings",
        description: "This catalog of paintings is supplied by the National Gallery of Art",
        path: 'FathomDocs/LanguageArts/Art_Paintings/Art_Paintings.json'
      },
      LA_Artists: {
        name: 'Artists',
        title: "Artists",
        description: "List of art by artists",
        path: 'FathomDocs/LanguageArts/Artists/Artists.json'
      },
      LA_Googlewhacks: {
        name: 'Googlewhacks',
        title: "Googlewhacks",
        description: "The collection at left contains the most recent 500 of the more than 450,000 Googlewhacks that were listed on November 11, 2004.",
        path: 'FathomDocs/LanguageArts/Googlewhacks/Googlewhacks.json'
      },
      LA_TextPass_Bush89: {
        name: 'Bush_89_Speech',
        title: "Bush 1989 Inaugural Speech",
        description: "Analyze the letter count of five paragraphs of George H. W. Bush's Inaugural Address, January 20, 1989.",
        path: 'FathomDocs/LanguageArts/TextPassages/Bush89/Bush89.json'
      },
      LA_TextPass_Declaration: {
        name: 'Declaration_of_Independence',
        title: "Declaration of Independence",
        description: "Analyze the letter count of the first two paragraphs of the United States Declaration of Independence.",
        path: 'FathomDocs/LanguageArts/TextPassages/Declaration/Declaration.json'
      },
      LA_TextPass_Don: {
        name: 'Don_Juan',
        title: "Don Juan",
        description: "Analyze the letter count of of the first two paragraphs of Don Quixote de la Mancha.",
        path: 'FathomDocs/LanguageArts/TextPassages/Don/Don.json'
      },
      LA_TextPass_Faust: {
        name: 'Faust',
        title: "Faust",
        description: "Analyze the letter count of Goethe's Faust.",
        path: 'FathomDocs/LanguageArts/TextPassages/Faust/Faust.json'
      },
      LA_TextPass_Gettysburg: {
        name: 'Gettysburg_Address',
        title: "Gettysburg Address",
        description:"Analyze the letter count in three paragraphs of the Gettysburg Address.",
        path: 'FathomDocs/LanguageArts/TextPassages/Gettysburg/Gettysburg.json'
      },
      LA_TextPass_OldMan: {
        name: 'Old_Man_and_Sea',
        title: "The Old Man and The Sea",
        description : "Analyze the letter count in a passage from The Old Man and The Sea",
        path: 'FathomDocs/LanguageArts/TextPassages/OldMan/OldMan.json'
      },
      Math_Algebra_Buildings: {
        name: 'Buildings',
        title: "Building Heights",
        description: "How is the height of a building related to the number of stories it has?",
        path: 'FathomDocs/Mathematics/Algebra/Buildings/Buildings.json'
      },
      Math_Algebra_Compound: {
        name: 'Compound',
        title: "Compound Interest",
        description: "Case table shows a model of a savings account.",
        path: 'FathomDocs/Mathematics/Algebra/Compound/Compound.json'
      },
      Math_Algebra_Cost: {
        name: 'Cost_Adj_by_Year',
        title: "Cost Adjustment by Year",
        description: "How much is your money worth based on the consumer price index",
        path: 'FathomDocs/Mathematics/Algebra/Cost/Cost.json'
      },
      Math_Algebra_Font_Size: {
        name: 'Font_Size',
        title: "Font Size",
        description: "Measurements of the length of a column and notice how that changes with the number of words and the font size.",
        path: 'FathomDocs/Mathematics/Algebra/Font_Size/Font_Size.json'
      },
      Math_Algebra_Guess: {
        name: 'Guess',
        title: "Guess and Check",
        description: "A 'guess and check' method for finding the correct answer to an Algebra problem.",
        path: 'FathomDocs/Mathematics/Algebra/Guess/Guess.json'
      },
      Math_Algebra_Pi: {
        name: 'Pi',
        title: "Pi Scale",
        description: "A scale marked in units of pi",
        path: 'FathomDocs/Mathematics/Algebra/Pi/Pi.json'
      },
      Math_Algebra_Quad: {
        name: 'Quadratic_Relationship',
        title: "Quadratic Relationship",
        description: "Figure out a method to find the best curve through the points.",
        path: 'FathomDocs/Mathematics/Algebra/Quad/Quad.json'
      },
      Math_Calculus_Integral: {
        name: 'Integral',
        path: 'FathomDocs/Mathematics/Calculus/Integral/Integral.json'
      },
      Math_Calculus_Integration: {
        name: 'Integration',
        path: 'FathomDocs/Mathematics/Calculus/Integration/Integration.json'
      },
      Math_Calculus_Logistics: {
        name: 'Logistics',
        path: 'FathomDocs/Mathematics/Calculus/Logistics/Logistics.json'
      },
      Math_Calculus_Minimization: {
        name: 'Minimization',
        path: 'FathomDocs/Mathematics/Calculus/Minimization/Minimization.json'
      },
      Math_Calculus_Pi: {
        name: 'Pi',
        path: 'FathomDocs/Mathematics/Calculus/Pi/Pi.json'
      },
      Math_Geometry_Solids: {
        name: 'Solids',
        path: 'FathomDocs/Mathematics/Geometry/Solids/Solids.json'
      },
      Math_NTheory_Pi: {
        name: 'Digits of Pi',
        path: 'FathomDocs/Mathematics/Number_Theory/Digits_of_Pi/Digits_of_Pi.json'
      },
      Math_NTheory_IntRing: {
        name: 'Integer Ring',
        path: 'FathomDocs/Mathematics/Number_Theory/Integer_Ring/Integer_Ring.json'
      },
      Math_NTheory_Prime_Density: {
        name: 'Prime Density',
        path: 'FathomDocs/Mathematics/Number_Theory/Prime_Density/Prime_Density.json'
      },
      Math_OMath_Growth: {
        name: 'Growth',
        path: 'FathomDocs/Mathematics/Other_Mathematics/Growth/Growth.json'
      },
      Math_OMath_NumTheory_Pi: {
        name: 'Number Theory Pi',
        path: 'FathomDocs/Mathematics/Other_Mathematics/Number_Theory/Digits_of_Pi/Digits_of_Pi.json'
      },
      Math_OMath_Series: {
        name: 'Series',
        path: 'FathomDocs/Mathematics/Other_Mathematics/Series/Series.json'
      },
      Math_Prob_Birthdays: {
        name: 'Birthdays',
        path: 'FathomDocs/Mathematics/Probability/Birthdays/Birthdays.json'
      },
      Math_Prob_Blackjack: {
        name: 'Blackjack',
        path: 'FathomDocs/Mathematics/Probability/Blackjack/Blackjack.json'
      },
      Math_Prob_Chaos: {
        name: 'Chaos Game',
        path: 'FathomDocs/Mathematics/Probability/Chaos_Game/Chaos_Game.json'
      },
      Math_Prob_Est_Pi: {
        name: 'Estimating Pi',
        path: 'FathomDocs/Mathematics/Probability/Estimating_Pi/Estimating_Pi.json'
      },
      Math_Prob_Geo_Cards: {
        name: 'Geometric Cards',
        path: 'FathomDocs/Mathematics/Probability/Geometric_Cards/Geometric_Cards.json'
      },
      Math_Prob_Life_Expect: {
        name: 'Life Expectancy',
        path: 'FathomDocs/Mathematics/Probability/Life_Expectancy/Life_Expectancy.json'
      },
      Math_Prob_Lotto: {
        name: 'Lotto',
        path: 'FathomDocs/Mathematics/Probability/Lotto/Lotto.json'
      },
      Math_Prob_Motion: {
        name: 'Motion',
        path: 'FathomDocs/Mathematics/Probability/Motion/Motion.json'
      },
      Math_Prob_Shoot_Match: {
        name: 'Shooting Match',
        path: 'FathomDocs/Mathematics/Probability/Shooting_Match/Shooting_Match.json'
      },
      Math_Prob_Spin_Game: {
        name: 'Spinner Game',
        path: 'FathomDocs/Mathematics/Probability/Spinner_Game/Spinner_Game.json'
      },
      Sci_Astro_Extra_Solar: {
        name: 'Extra Solar',
        path: 'FathomDocs/Science/Astronomy/Extra_Solar/Extra_Solar.json'
      },
      Sci_Astro_Jupiter_Moons: {
        name: 'Jupiter Moons',
        path: 'FathomDocs/Science/Astronomy/Jupiter_Moons/Jupiter_Moons.json'
      },
      Sci_Astro_Jupiter_Radius: {
        name: 'Jupiter Radius',
        path: 'FathomDocs/Science/Astronomy/Jupiter_Radius/Jupiter_Radius.json'
      },
      Sci_Astro_Space_Data: {
        name: 'Space Data',
        path: 'FathomDocs/Science/Astronomy/Space_Data/Space_Data.json'
      },
      Sci_Astro_Sunspots: {
        name: 'Sunspots',
        path: 'FathomDocs/Science/Astronomy/Sunspots/Sunspots.json'
      },
      Sci_Bio_Bears: {
        name: 'Bears',
        path: 'FathomDocs/Science/Biology/Bears/Bears.json'
      },
      Sci_Bio_Bird_Obs: {
        name: 'Bird Observations',
        path: 'FathomDocs/Science/Biology/Bird_Observations/Bird_Observations.json'
      },
      Sci_Bio_Height: {
        name: 'Heights',
        path: 'FathomDocs/Science/Biology/Height/Height.json'
      },
      Sci_Bio_Mammals: {
        name: 'Mammals',
        path: 'FathomDocs/Science/Biology/Mammals/Mammals.json'
      },
      Sci_Bio_Midges: {
        name: 'Midges',
        path: 'FathomDocs/Science/Biology/Midges/Midges.json'
      },
      Sci_Bio_Prey_Ped_Pop: {
        name: 'Prey Predator Population',
        path: 'FathomDocs/Science/Biology/Prey-Ped-Pop/Prey-Ped-Pop.json'
      },
      Sci_ESci_AVG_Temp_AL: {
        name: 'Alabama Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AL_Avg_Temps/AL_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_AR: {
        name: 'Arkansas Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AR_Avg_Temps/AR_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_AZ: {
        name: 'Arizona Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AZ_Avg_Temps/AZ_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_CA: {
        name: 'California Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/CA_Avg_Temps/CA_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_CO: {
        name: 'Colorado Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/CO_Avg_Temps/CO_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_FL: {
        name: 'Florida Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/FL_Avg_Temps/FL_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_ME: {
        name: 'Maine Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/ME_Avg_Temps/ME_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_ND: {
        name: 'North Dakota Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/ND_Avg_Temps/ND_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_NY: {
        name: 'New York Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/NY_Avg_Temps/NY_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_WA: {
        name: 'Washington Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/WA_Avg_Temps/WA_Avg_Temps.json'
      },
      Sci_ESci_Concord_Weather: {
        name: 'Concord Weather',
        path: 'FathomDocs/Science/E_Sciences/Concord_Weather/Concord_Weather.json'
      },
      Sci_ESci_Earthquakes: {
        name: 'Earthquakes',
        path: 'FathomDocs/Science/E_Sciences/Earthquakes/Earthquakes.json'
      },
      Sci_ESci_Global_Carbon: {
        name: 'Global Carbon Levels',
        path: 'FathomDocs/Science/E_Sciences/Global_Carbon/Global_Carbon.json'
      },
      Sci_ESci_Iowa: {
        name: 'Iowa Weather',
        path: 'FathomDocs/Science/E_Sciences/Iowa/Iowa.json'
      },
      Sci_ESci_Kobe: {
        name: 'Kobe Earthquake',
        path: 'FathomDocs/Science/E_Sciences/Kobe/Kobe.json'
      },
      Sci_ESci_Mauna_Loa: {
        name: 'Mauna Loa Carbon Levels',
        path: 'FathomDocs/Science/E_Sciences/Mauna_Loa/Mauna_Loa.json'
      },
      Sci_ESci_North_American: {
        name: 'North American Earthquakes',
        path: 'FathomDocs/Science/E_Sciences/North_American/North_American.json'
      },
      Sci_ESci_R_Carbon: {
        name: 'Regional Carbon Levels',
        path: 'FathomDocs/Science/E_Sciences/R_Carbon/R_Carbon.json'
      },
      Sci_ESci_South_Pole: {
        name: 'South Pole Temperatures',
        path: 'FathomDocs/Science/E_Sciences/South_Pole/South_Pole.json'
      },
      Sci_ESci_Tides: {
        name: 'Tides',
        path: 'FathomDocs/Science/E_Sciences/Tides/Tides.json'
      },
      Sci_ESci_Tree_Rings: {
        name: 'Tree_Rings',
        path: 'FathomDocs/Science/E_Sciences/Tree_Rings/Tree_Rings.json'
      },
      Sci_ESci_Weather_Machine: {
        name: 'Weather Model',
        path: 'FathomDocs/Science/E_Sciences/Weather_Machine/Weather_Maching.json'
      },
      Sci_PhysChem_Boyle: {
        name: "Boyle's Law",
        path: 'FathomDocs/Science/PhysChem/Boyle/Boyle.json'
      },
      Sci_PhysChem_Elements: {
        name: "Periodic Table",
        path: 'FathomDocs/Science/PhysChem/Elements/Elements.json'
      },
      Sci_PhysChem_Heating: {
        name: "Heating",
        path: 'FathomDocs/Science/PhysChem/Heating/Heating.json'
      },
      Sci_PhysChem_Panel: {
        name: "Solar Panel",
        path: 'FathomDocs/Science/PhysChem/Panel/Panel.json'
      },
      Sci_PhysChem_Radiosonde: {
        name: "Weather Balloon",
        path: 'FathomDocs/Science/PhysChem/Radiosonde/Radiosonde.json'
      },
      Sci_PhysChem_RB_Ball: {
        name: "Rubber Band Ball",
        path: 'FathomDocs/Science/PhysChem/RB_Ball/RB_Ball.json'
      },
      Sci_Tech_Airplanes: {
        name: "Airplanes",
        path: 'FathomDocs/Science/Technology/Airplanes/Airplanes.json'
      },
      Sci_Tech_Cars: {
        name: "Cars",
        path: 'FathomDocs/Science/Technology/Cars/Cars.json'
      },
      Sci_Tech_Moore_Law: {
        name: "Cars",
        path: 'FathomDocs/Science/Technology/Moore_Law/Moore_Law.json'
      },
      Sci_Tech_Nails: {
        name: "Nails",
        path: 'FathomDocs/Science/Technology/Nails/Nails.json'
      },
      SocSci_CA_Alberta2024: {
        name: "Receipts from Alberta 2024",
        path: 'FathomDocs/Social_Science/Canada/Alberta2024/Alberta2024.json'
      },
      SocSci_CA_Metro: {
        name: "Canadian Metro Areas",
        path: 'FathomDocs/Social_Science/Canada/Canada_Metro/Canada_Metro.json'
      },
      SocSci_CA_Gov_Debt: {
        name: "Government Debt",
        path: 'FathomDocs/Social_Science/Canada/Gov_Debt/Gov_Debt.json'
      },
      SocSci_CA_Int_Export: {
        name: "Exports",
        path: 'FathomDocs/Social_Science/Canada/Int_Exports/Int_Exports.json'
      },
      SocSci_CA_Int_Imports: {
        name: "Imports",
        path: 'FathomDocs/Social_Science/Canada/Int_Imports/Int_Imports.json'
      },
      SocSci_CA_Military_69: {
        name: "Military Personnel",
        path: 'FathomDocs/Social_Science/Canada/Military_69/Military_69.json'
      },
      Sports: {
        name: "Summer Olympics",
        path: 'FathomDocs/Sports/Summer_Olympics/Summer_Olympics.json'
      }
    }


  function launchSampleDoc(url) {
    window.open(url, '_blank');
  }

  function invokeSampleDoc(name) {
    console.log("In invokeSampleDoc" + name);
    var codapURL = document.getElementById('codap-url').value,
      docserverURL = document.getElementById('doc-server-url').value,
      oldLocation = location.href,
      newLocation = oldLocation.replace(/index.html.*/, ''),
      path = map[name].path,
      url = 'http://concord-consortium.github.io/codap-data/' + path;

    if (docserverURL) {
      launchSampleDoc(codapURL + '?documentServer=' + encodeURI(docserverURL) + '&url=' + encodeURI(url));
    } else {
      launchSampleDoc(codapURL + '?url=' + encodeUR(url));
    }
  }

  function getSampleDocURL(name) {
    var path = map[name].path,
      url = 'http://concord-consortium.github.io/codap-data/' + path;
    console.log(url);
    return url;
  }

  function buildPage(){
    console.log("in buildPage");

    var html ='',
      table=$('<table>').addClass('sample-table'),
      row,
      launchCell=$('<a href="#">Launch</a>'),
      name,
      description,
      path,
      url=$('<a>', {text:"Launch", href:"#"});

      mapLength = Object.keys(map).length;

    console.log("This is the Object.keys(map) " +Object.keys(map));
    Object.getOwnPropertyNames(map).forEach(function (val,idx, array)
    {
      name= map[val].name;
      description = map[val].description || '(no description available)'
      path = map[val].path;
      console.log(val+'->'+map[val].name + ' idx is ' + idx);
      row=$('<tr>');
      $('<td>').addClass('document-title').text(name).appendTo(row);
      $('<td>').addClass('document-description').text(description).appendTo(row);
      $('<td>').addClass('launch-button').attr({'id':val+"-launch"}).text("Launch").appendTo(row);
      $('<td>').text("Link").appendTo(row);
      row.appendTo(table);
    });
    table.appendTo('#sample-document-list');
  }
  buildPage();
})