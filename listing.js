$(document).ready(function (){
/* map attribute definitions:
    title = name of document as it appears in github.io/codap-data website
    description = gives a brief description of document
    path = path to document json file in github
    ready = checkbox to indicate whether a document needs more work. Check mark indicates document needs more work.
    categories = an array of categories that document can fall under in github.io/codap-data website */

  var map = {
      Markov: {
        title: 'Markov',
        description: "Play Roshambo agains the evil Dr. Markov. If you win, you can save Madeline the dog. Improve you odds by analyzing Markov's moves in a graph.",
        path: 'markov/Markov_Sample.json',
        ready: true,
        categories: ['statistics']
      },
      Climate_Change: {
        title: 'Climate Change',
        description: "This is a simulation model of Climate Changes.",
        path: 'Climate_Change/Climate-Change-A.json',
        ready: true,
        categories: ['model']
      },
      Four_Seals: {
        title: 'Four Seals',
        description:'Display the tracks of four elephant seals in the Pacific on a map. Make graphs and use selection to help determine what is going on.',
        path: 'four-seals/four-seals.json',
        ready: true,
        categories: ['map']
      },
      Mammals: {
        title:'Mammal',
        description:'There are 27 mammals, each with eight attributes. Which of the mammals has the longest life span? Sleeps the most? What relationships can you find?',
        path: 'mammals/Mammals_Sample.json',
        ready: true,
        categories: ['science']

      },
      Parachute: {
        title: 'Parachute Model',
        description: "Experiment dropping a parachute to see how changing the parachute's size and mass of its cargo changes the terminal velocity of the drop.",
        path: 'parachute/Parachute_Model_Sample.json',
        ready: true,
        categories: ['model']
      },
      States_And_People: {
        title: 'States and Education',
        description: "These are data gathered from the Minnesota Population Center. It provides aggregate information for the United States. What do you notice about the education levels within each state?",
        path: 'statesnpeople/States_and_Education.json',
        ready: true,
        categories: ['map']
      },
      Education_API: {
        title: '1999 API for all California High Schools',
        description:"Has 1999 APIs for all California High Schools",
        path: 'FathomDocs/Education/API_All_CA_HS_1999/API_All_CA_HS_1999.json',
        ready: true,
        categories: ['education']
      },
      Education_Calc_Grades: {
        title:'Calculus Grades',
        description: "Grades recorded during several years for a Calculus 2 course at the Instituto Tecnológico de Costa Rica",
        path: 'FathomDocs/Education/Calc_Grades/Grades_Calc.json',
        ready: false,
        categories: ['education']
      },
      Education_Faculty_Salaries: {
        title: "Faculty Salaries",
        description: "Salaries of College faculty , in the 2002-2003 academic year",
        path: 'FathomDocs/Education/Faculty_Salaries/Faculty_Salaries.json',
        ready: false,
        categories: ['education']
      },
      Education_ITCR_Students: {
        title: 'ITCR Students Info',
        description: "Results from polls taken in 1993, 1994, 2000 and 2003 among students of the Instituto Tecnológico de Costa Rica.",
        path: 'FathomDocs/Education/ITCR_Students.json',
        ready: false,
        categories: ['education']
      },
      Education_School_Children: {
        title: "School Children Info",
        description:"Age (months), height (inches), and weight (pounds) were recorded for a group of school children.",
        path: 'FathomDocs/Education/School_Children/School_Children.json',
        ready: false,
        categories: ['education']
      },
      Education_Six_Tests: {
        title: "Six Tests",
        description: "Do students who take standardized tests multiple times have an advantage over those who just take them once or twice?",
        path: 'FathomDocs/Education/Six_Tests/Six_Tests.json',
        ready: false,
        categories: ['education']
      },
      Education_School_Enrollments: {
        title: "State Public School Enrollments",
        description: "Enrollment in public elementary and secondary schools, by state or jurisdiction: Fall 1988 to Fall 2010.",
        path: 'FathomDocs/Education/State_Public_School_Enrollments/Public_School_Enrollments.json',
        ready: false,
        categories: ['education']
      },
      Education_Education_Spending: {
        title: "Education Spending by State",
        description: "How much money each state spent on education from 1969 to 2000",
        path: 'FathomDocs/Education/States_EdSpending/States_EdSpending.json',
        ready: false,
        categories: ['education']
      },
      Education_Stats_Grades: {
        title: "Stats Grades",
        description: "Grades recorded during several years for a Statistics course at the Instituto Tecnológico de Costa Rica, with one case per student",
        path: 'FathomDocs/Education/Stats_Grades/Stats_Grades.json',
        ready: false,
        categories: ['education']
      },
      Education_Students_Grades: {
        title: "Students' Grades",
        description:"Grades obtained by students in the author's classes at the Instituto Tecnológico de Costa Rica.",
        path: "FathomDocs/Education/Students'_Grades/Students'_Grades.json",
        ready: false,
        categories: ['education']
      },
      Education_TAMU_Business: {
        title: "Texas A and M Univ Business Students' Grades",
        description: "Grades obtained by Business students at Texas A and M University during the years 1989-1992.",
        path: 'FathomDocs/Education/TAMU_Business/TAMU_Business.json',
        ready: false,
        categories: ['education']
      },
      Education_Visits: {
        title: "Visits",
        description: "Visits of students to author's office hours.",
        path: 'FathomDocs/Education/Visits/Visits.json',
        ready: false,
        categories: ['education']
      },
      LA_2000_Words: {
        title: "2000 Words",
        description: "2000 words randomly chosen from the YAWL (yet another word list) that comes with the Unix operating system.",
        path: 'FathomDocs/LanguageArts/2000_Words/2000_Words.json',
        ready: false,
        categories: ['langarts']
      },
      LA_Art_Paintings: {
        title: "Art Paintings",
        description: "This catalog of paintings is supplied by the National Gallery of Art",
        path: 'FathomDocs/LanguageArts/Art_Paintings/Art_Paintings.json',
        ready: true,
        categories: ['langarts']
      },
      LA_Artists: {
        title: "Artists",
        description: "List of art by artists",
        path: 'FathomDocs/LanguageArts/Artists/Artists.json',
        ready: false,
        categories: ['langarts']
      },
      LA_Googlewhacks: {
        title: "Googlewhacks",
        description: "The collection at left contains the most recent 500 of the more than 450,000 Googlewhacks that were listed on November 11, 2004.",
        path: 'FathomDocs/LanguageArts/Googlewhacks/Googlewhacks.json',
        ready: false,
        categories: ['langarts']
      },
      LA_TextPass_Bush89: {
        title: "Bush 1989 Inaugural Speech",
        description: "Analyze the letter count of five paragraphs of George H. W. Bush's Inaugural Address, January 20, 1989.",
        path: 'FathomDocs/LanguageArts/TextPassages/Bush89/Bush89.json',
        ready: true,
        categories: ['langarts']
      },
      LA_TextPass_Declaration: {
        title: "Declaration of Independence",
        description: "Analyze the letter count of the first two paragraphs of the United States Declaration of Independence.",
        path: 'FathomDocs/LanguageArts/TextPassages/Declaration/Declaration.json',
        ready: true,
        categories: ['langarts']
      },
      LA_TextPass_Don: {
        title: "Don Juan",
        description: "Analyze the letter count of of the first two paragraphs of Don Quixote de la Mancha.",
        path: 'FathomDocs/LanguageArts/TextPassages/Don/Don.json',
        ready: true,
        categories: ['langarts']
      },
      LA_TextPass_Faust: {
        title: "Faust",
        description: "Analyze the letter count of Goethe's Faust.",
        path: 'FathomDocs/LanguageArts/TextPassages/Faust/Faust.json',
        ready: true,
        categories: ['langarts']
      },
      LA_TextPass_Gettysburg: {
        title: "Gettysburg Address",
        description:"Analyze the letter count in three paragraphs of the Gettysburg Address.",
        path: 'FathomDocs/LanguageArts/TextPassages/Gettysburg/Gettysburg.json',
        ready: true,
        categories: ['langarts']
      },
      LA_TextPass_OldMan: {
        title: "The Old Man and The Sea",
        description : "Analyze the letter count in a passage from The Old Man and The Sea",
        path: 'FathomDocs/LanguageArts/TextPassages/OldMan/OldMan.json',
        ready: true,
        categories: ['langarts']
      },
      Math_Algebra_Buildings: {
        title: "Building Heights",
        description: "How is the height of a building related to the number of stories it has?",
        path: 'FathomDocs/Mathematics/Algebra/Buildings/Buildings.json',
        ready: false,
        categories: ['algebra']
      },
      Math_Algebra_Compound: {
        title: "Compound Interest",
        description: "Case table shows a model of a savings account.",
        path: 'FathomDocs/Mathematics/Algebra/Compound/Compound.json',
        ready: true,
        categories: ['algebra']
      },
      Math_Algebra_Cost: {
        title: "Cost Adjustment by Year",
        description: "How much is your money worth based on the consumer price index",
        path: 'FathomDocs/Mathematics/Algebra/Cost/Cost.json',
        ready: false,
        categories: ['algebra']
      },
      Math_Algebra_Font_Size: {
        title: "Font Size",
        description: "Measurements of the length of a column and notice how that changes with the number of words and the font size.",
        path: 'FathomDocs/Mathematics/Algebra/Font_Size/Font_Size.json',
        ready: true,
        categories: ['algebra']
      },
      Math_Algebra_Guess: {
        title: "Guess and Check",
        description: "A 'guess and check' method for finding the correct answer to an Algebra problem.",
        path: 'FathomDocs/Mathematics/Algebra/Guess/Guess.json',
        ready: true,
        categories: ['algebra']
      },
      Math_Algebra_Pi: {
        title: "Pi Scale",
        description: "A scale marked in units of pi",
        path: 'FathomDocs/Mathematics/Algebra/Pi/Pi.json',
        ready: true,
        categories: ['algebra']
      },
      Math_Algebra_Quad: {
        title: "Quadratic Relationship",
        description: "Figure out a method to find the best curve through the points.",
        path: 'FathomDocs/Mathematics/Algebra/Quad/Quad.json',
        ready: true,
        categories: ['algebra']
      },
      Math_Calculus_Integral: {
        title: 'Integrals and Derivatives',
        description: 'Demonstrates the visualization or integrals and derivatives',
        path: 'FathomDocs/Mathematics/Calculus/Integral/Integral.json',
        ready: true,
        categories: ['calculus']
      },
      Math_Calculus_Integration: {
        title: 'Integration',
        description: 'This document illustrates how to do numerical integration of an arbitrary function.',
        path: 'FathomDocs/Mathematics/Calculus/Integration/Integration.json',
        ready: true,
        categories: ['calculus']
      },
      Math_Calculus_Logistics: {
        title: 'Logistics',
        description: 'Investigate the effect of changing x and k in the logistics function f(x)=kx(1-x)',
        path: 'FathomDocs/Mathematics/Calculus/Logistics/Logistics.json',
        ready: true,
        categories: ['calculus']
      },
      Math_Calculus_Minimization: {
        title: 'Minimization',
        description: 'Find the minimum of a plotted function',
        path: 'FathomDocs/Mathematics/Calculus/Minimization/Minimization.json',
        ready: false,
        categories: ['calculus']
      },
      Math_Calculus_Pi: {
        title: 'Unit Pi',
        description: 'Plotting a graph that uses pi as a unit',
        path: 'FathomDocs/Mathematics/Calculus/Pi/Pi.json',
        ready: false,
        categories: ['calculus']
      },
      Math_Geometry_Solids: {
        title: 'Johnson Solids',
        description: 'Explore the Johnson solids',
        path: 'FathomDocs/Mathematics/Geometry/Solids/Solids.json',
        ready: true,
        categories: ['geometry']
      },
      Math_NTheory_Pi: {
        title: 'Digits of Pi',
        description: 'Explore the digits of pi',
        path: 'FathomDocs/Mathematics/Number_Theory/Digits_of_Pi/Digits_of_Pi.json',
        ready: true,
        categories: ['num_theory','other_math']
      },
      Math_NTheory_IntRing: {
        title: 'Integer Ring',
        description:'Explore the patterns of addition and multiplication of integers',
        path: 'FathomDocs/Mathematics/Number_Theory/Integer_Ring/Integer_Ring.json',
        ready: false,
        categories: ['num_theory']
      },
      Math_NTheory_Prime_Density: {
        title: 'Prime Density',
        description: 'Investigate the spacing between prime numbers',
        path: 'FathomDocs/Mathematics/Number_Theory/Prime_Density/Prime_Density.json',
        ready: false,
        categories: ['num_theory']
      },
      Math_OMath_Growth: {
        title: 'Growth',
        description: 'Investigate the theory of chaotic growth',
        path: 'FathomDocs/Mathematics/Other_Mathematics/Growth/Growth.json',
        ready: false,
        categories:['num_theory']
      },
      Math_OMath_NumTheory_Pi: {
        title: 'Number Theory Pi',
        description: 'Similar to Digits of Pi in Number Theory',
        path: 'FathomDocs/Mathematics/Other_Mathematics/Number_Theory/Digits_of_Pi/Digits_of_Pi.json',
        ready: true,
        categories: ['num_theory','other_math']
      },
      Math_OMath_Series: {
        title: 'Fourier Series',
        description: 'Explore the Fourier Series',
        path: 'FathomDocs/Mathematics/Other_Mathematics/Series/Series.json',
        ready: false,
        categories: ['num_theory']
      },
      Math_Prob_Birthdays: {
        title: 'Birthdays',
        description: 'Explore the distribution of bithdays in the USj in 1978',
        path: 'FathomDocs/Mathematics/Probability/Birthdays/Birthdays.json',
        ready: true,
        categories: ['probability']
      },
      Math_Prob_Blackjack: {
        title: 'Blackjack',
        description: 'How many of the card pairs make a blackjack hand?',
        path: 'FathomDocs/Mathematics/Probability/Blackjack/Blackjack.json',
        ready: true,
        categories: ['probability']
      },
      Math_Prob_Chaos: {
        title: 'Chaos Game Simulation',
        description: 'Explore the Chaos Game!',
        path: 'FathomDocs/Mathematics/Probability/Chaos_Game/Chaos_Game.json',
        ready: false,
        categories: ['probability']
      },
      Math_Prob_Est_Pi: {
        title: 'Estimating Pi',
        description: 'How to use the graph to estimate pi',
        path: 'FathomDocs/Mathematics/Probability/Estimating_Pi/Estimating_Pi.json',
        ready: true,
        categories: ['probability']
      },
      Math_Prob_Geo_Cards: {
        title: 'Geometric Cards',
        description: 'How many cards do you have to draw until you get a club',
        path: 'FathomDocs/Mathematics/Probability/Geometric_Cards/Geometric_Cards.json',
        ready: true,
        categories: ['probability']
      },
      Math_Prob_Life_Expect: {
        title: 'Life Expectancy Probability',
        description: "What's the chance you're going to die in the next year",
        path: 'FathomDocs/Mathematics/Probability/Life_Expectancy/Life_Expectancy.json',
        ready: true,
        categories: ['probability']
      },
      Math_Prob_Lotto: {
        title: 'Lotto',
        description: 'Does Lotto pay?',
        path: 'FathomDocs/Mathematics/Probability/Lotto/Lotto.json',
        ready: false,
        categories: ['probability']
      },
      Math_Prob_Motion: {
        title: 'Brownian Motion',
        description: 'Explore the motion of a molecule',
        path: 'FathomDocs/Mathematics/Probability/Motion/Motion.json',
        ready: true,
        categories: ['probability']
      },
      Math_Prob_Shoot_Match: {
        title: 'Shooting Match',
        description: 'Which strategy is best when each person has different shooting abilities',
        path: 'FathomDocs/Mathematics/Probability/Shooting_Match/Shooting_Match.json',
        ready: true,
        categories: ['probability']
      },
      Math_Prob_Spin_Game: {
        title: 'Spinner Game',
        description: 'What is the best largest value for Player 1 in the Showcase Showdown',
        path: 'FathomDocs/Mathematics/Probability/Spinner_Game/Spinner_Game.json',
        ready: true,
        categories: ['probability']
      },
      Scie_Astro_Extra_Solar: {
        name: 'Extra Solar',
        path: 'FathomDocs/Science/Astronomy/Extra_Solar/Extra_Solar.json'
      },
      Scie_Astro_Jupiter_Moons: {
        name: 'Jupiter Moons',
        path: 'FathomDocs/Science/Astronomy/Jupiter_Moons/Jupiter_Moons.json'
      },
      Scie_Astro_Jupiter_Radius: {
        name: 'Jupiter Radius',
        path: 'FathomDocs/Science/Astronomy/Jupiter_Radius/Jupiter_Radius.json'
      },
      Scie_Astro_Space_Data: {
        name: 'Space Data',
        path: 'FathomDocs/Science/Astronomy/Space_Data/Space_Data.json'
      },
      Scie_Astro_Sunspots: {
        name: 'Sunspots',
        path: 'FathomDocs/Science/Astronomy/Sunspots/Sunspots.json'
      },
      Scie_Bio_Bears: {
        name: 'Bears',
        path: 'FathomDocs/Science/Biology/Bears/Bears.json'
      },
      Scie_Bio_Bird_Obs: {
        name: 'Bird Observations',
        path: 'FathomDocs/Science/Biology/Bird_Observations/Bird_Observations.json'
      },
      Scie_Bio_Height: {
        name: 'Heights',
        path: 'FathomDocs/Science/Biology/Height/Height.json'
      },
      Scie_Bio_Mammals: {
        name: 'Mammals',
        path: 'FathomDocs/Science/Biology/Mammals/Mammals.json'
      },
      Scie_Bio_Midges: {
        name: 'Midges',
        path: 'FathomDocs/Science/Biology/Midges/Midges.json'
      },
      Scie_Bio_Prey_Ped_Pop: {
        name: 'Prey Predator Population',
        path: 'FathomDocs/Science/Biology/Prey-Ped-Pop/Prey-Ped-Pop.json'
      },
      Scie_ESci_AVG_Temp_AL: {
        name: 'Alabama Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AL_Avg_Temps/AL_Avg_Temps.json'
      },
      Scie_ESci_AVG_Temp_AR: {
        name: 'Arkansas Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AR_Avg_Temps/AR_Avg_Temps.json'
      },
      Scie_ESci_AVG_Temp_AZ: {
        name: 'Arizona Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AZ_Avg_Temps/AZ_Avg_Temps.json'
      },
      Scie_ESci_AVG_Temp_CA: {
        name: 'California Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/CA_Avg_Temps/CA_Avg_Temps.json'
      },
      Sci_ESci_AVG_Temp_CO: {
        name: 'Colorado Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/CO_Avg_Temps/CO_Avg_Temps.json'
      },
      Scie_ESci_AVG_Temp_FL: {
        name: 'Florida Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/FL_Avg_Temps/FL_Avg_Temps.json'
      },
      Scie_ESci_AVG_Temp_ME: {
        name: 'Maine Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/ME_Avg_Temps/ME_Avg_Temps.json'
      },
      Scie_ESci_AVG_Temp_ND: {
        name: 'North Dakota Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/ND_Avg_Temps/ND_Avg_Temps.json'
      },
      Scie_ESci_AVG_Temp_NY: {
        name: 'New York Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/NY_Avg_Temps/NY_Avg_Temps.json'
      },
      Scie_ESci_AVG_Temp_WA: {
        name: 'Washington Average Temperatures',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/WA_Avg_Temps/WA_Avg_Temps.json'
      },
      Scie_ESci_Concord_Weather: {
        name: 'Concord Weather',
        path: 'FathomDocs/Science/E_Sciences/Concord_Weather/Concord_Weather.json'
      },
      Scie_ESci_Earthquakes: {
        name: 'Earthquakes',
        path: 'FathomDocs/Science/E_Sciences/Earthquakes/Earthquakes.json'
      },
      Scie_ESci_Global_Carbon: {
        name: 'Global Carbon Levels',
        path: 'FathomDocs/Science/E_Sciences/Global_Carbon/Global_Carbon.json'
      },
      Scie_ESci_Iowa: {
        name: 'Iowa Weather',
        path: 'FathomDocs/Science/E_Sciences/Iowa/Iowa.json'
      },
      Scie_ESci_Kobe: {
        name: 'Kobe Earthquake',
        path: 'FathomDocs/Science/E_Sciences/Kobe/Kobe.json'
      },
      Scie_ESci_Mauna_Loa: {
        name: 'Mauna Loa Carbon Levels',
        path: 'FathomDocs/Science/E_Sciences/Mauna_Loa/Mauna_Loa.json'
      },
      Scie_ESci_North_American: {
        name: 'North American Earthquakes',
        path: 'FathomDocs/Science/E_Sciences/North_American/North_American.json'
      },
      Scie_ESci_R_Carbon: {
        name: 'Regional Carbon Levels',
        path: 'FathomDocs/Science/E_Sciences/R_Carbon/R_Carbon.json'
      },
      Scie_ESci_South_Pole: {
        name: 'South Pole Temperatures',
        path: 'FathomDocs/Science/E_Sciences/South_Pole/South_Pole.json'
      },
      Scie_ESci_Tides: {
        name: 'Tides',
        path: 'FathomDocs/Science/E_Sciences/Tides/Tides.json'
      },
      Scie_ESci_Tree_Rings: {
        name: 'Tree_Rings',
        path: 'FathomDocs/Science/E_Sciences/Tree_Rings/Tree_Rings.json'
      },
      Scie_ESci_Weather_Machine: {
        name: 'Weather Model',
        path: 'FathomDocs/Science/E_Sciences/Weather_Machine/Weather_Maching.json'
      },
      Scie_PhysChem_Boyle: {
        name: "Boyle's Law",
        path: 'FathomDocs/Science/PhysChem/Boyle/Boyle.json'
      },
      Scie_PhysChem_Elements: {
        name: "Periodic Table",
        path: 'FathomDocs/Science/PhysChem/Elements/Elements.json'
      },
      Scie_PhysChem_Heating: {
        name: "Heating",
        path: 'FathomDocs/Science/PhysChem/Heating/Heating.json'
      },
      Scie_PhysChem_Panel: {
        name: "Solar Panel",
        path: 'FathomDocs/Science/PhysChem/Panel/Panel.json'
      },
      Scie_PhysChem_Radiosonde: {
        name: "Weather Balloon",
        path: 'FathomDocs/Science/PhysChem/Radiosonde/Radiosonde.json'
      },
      Scie_PhysChem_RB_Ball: {
        name: "Rubber Band Ball",
        path: 'FathomDocs/Science/PhysChem/RB_Ball/RB_Ball.json'
      },
      Scie_Tech_Airplanes: {
        name: "Airplanes",
        path: 'FathomDocs/Science/Technology/Airplanes/Airplanes.json'
      },
      Scie_Tech_Cars: {
        name: "Cars",
        path: 'FathomDocs/Science/Technology/Cars/Cars.json'
      },
      Scie_Tech_Moore_Law: {
        name: "Cars",
        path: 'FathomDocs/Science/Technology/Moore_Law/Moore_Law.json'
      },
      Scie_Tech_Nails: {
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
    };


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
      return (codapURL + '?documentServer=' + encodeURI(docserverURL) + '&url=' + encodeURI(url));
    } else {
      return (codapURL + '?url=' + encodeUR(url));
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
      url='http://concord-consortium.github.io/codap-data/';

      mapLength = Object.keys(map).length;

    Object.getOwnPropertyNames(map).forEach(function (val,idx, array)
    {
      var title= map[val].title,
        description = map[val].description || '(no description available)',
        ready=map[val].ready,
        path = map[val].path,
        docURL=invokeSampleDoc(val),
        //tdReady=$('<td>').append($('<input/>', {'type':'checkbox'})),
        launchLink=$('<a target = "_blank" href=' + docURL +'>Launch</a>'),
        linkLink=$('<a href=' + url+path + '>Link</a>'),
        tdLaunch=$('<td>').addClass('launch-button').attr({'id':val+"-launch"}),
        tdLink = $('<td>').addClass('link-button').attr({'id':val+"-link"});

      console.log(val+'->'+map[val].name + ' idx is ' + idx);
      if (map[val].ready === false) {
        tdReady=$('<td>').append($('<input/>', {'type':'checkbox'}).prop("checked",true));
      } else {
        tdReady=$('<td>').append($('<input/>', {'type':'checkbox'}));
      }
      row=$('<tr>');
      tdReady.appendTo(row);
      $('<td>').addClass('document-title').text(title).appendTo(row);
      $('<td>').addClass('document-description').text(description).appendTo(row);
      launchLink.click(invokeSampleDoc(val)).appendTo(tdLaunch);
      tdLaunch.appendTo(row);
      linkLink.appendTo(tdLink);
      tdLink.appendTo(row);
      row.appendTo(table);
    });
    table.appendTo('#sample-document-list');
  }
  buildPage();
});