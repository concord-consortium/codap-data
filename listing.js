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
        categories: ['probability']
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
        categories: ['biology']

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
        description: 'Explore the distribution of birthdays in the USj in 1978',
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
        title: 'Extra Solar',
          description: 'Explore 111 extrasolar masses and orbital characteristics of known extrasolar planets',
        path: 'FathomDocs/Science/Astronomy/Extra_Solar/Extra_Solar.json',
          ready: true,
          categories:['astronomy']
      },
      Scie_Astro_Jupiter_Moons: {
        title: 'Jupiter Moons',
          description: 'A case table about four moons of Jupiter: Io, Europa, Ganymede, and Callisto',
        path: 'FathomDocs/Science/Astronomy/Jupiter_Moons/Jupiter_Moons.json',
          ready: true,
          categories: ['astronomy']
      },
      Scie_Astro_Jupiter_Radius: {
        title: 'Jupiter Radius',
          description: 'Explain the plot of radius versus mean Julian date',
        path: 'FathomDocs/Science/Astronomy/Jupiter_Radius/Jupiter_Radius.json',
          ready: true,
          categories: ['astronomy']
      },
      Scie_Astro_Space_Data: {
        title: 'Space Data',
          description: 'Explore a study about how to grow plants in space.',
        path: 'FathomDocs/Science/Astronomy/Space_Data/Space_Data.json',
          ready: true,
          categories: ['astronomy']
      },
      Scie_Astro_Sunspots: {
        title: 'Sunspots',
          description: 'A case table gives the sunspot number for a random sample of 2000 days since 1951.',
        path: 'FathomDocs/Science/Astronomy/Sunspots/Sunspots.json',
          ready: true,
          categories: ['astronomy']
      },
      Scie_Bio_Bears: {
        title: 'Bears',
          description: 'How can you use other measurements to measure the weight of a bear',
        path: 'FathomDocs/Science/Biology/Bears/Bears.json',
          ready: true,
          categories: ['biology']
      },
      Scie_Bio_Bird_Obs: {
        title: 'Bird Observations',
          description: 'Explore raw data about what bird species were seen and when, per year',
        path: 'FathomDocs/Science/Biology/Bird_Observations/Bird_Observations.json',
          ready: true,
          categories:['biology']
      },
      Scie_Bio_Height: {
        title: 'Heights',
          description: 'What is the difference in heights at different times of the day for several subjects between the ages of 20 and 25',
        path: 'FathomDocs/Science/Biology/Height/Height.json',
          ready: true,
          categories: ['biology']
      },
      Scie_Bio_Mammals: {
        title: 'Mammals',
          description: 'Explore the sleeping habits of 62 different species of mammals',
        path: 'FathomDocs/Science/Biology/Mammals/Mammals.json',
          ready: true,
          categories: ['biology']
      },
      Scie_Bio_Midges: {
        title: 'Midges',
          description: 'What are the difference between two varieties of midges',
        path: 'FathomDocs/Science/Biology/Midges/Midges.json',
          ready: true,
          categories: ['biology']
      },
      Scie_Bio_Prey_Ped_Pop: {
        title: 'Prey Predator Population',
          description: 'Explore data of a simulated ecosystem containing predators and their prey',
        path: 'FathomDocs/Science/Biology/Prey-Ped-Pop/Prey-Ped-Pop.json',
          ready: true,
          categories: ['biology']
      },
      Scie_ESci_AVG_Temp_AL: {
        title: 'Alabama Average Temperatures',
          description: 'A collection of data from multiple stations around Alabama over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AL_Avg_Temps/AL_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_AVG_Temp_AR: {
        title: 'Arkansas Average Temperatures',
          description: 'A collection of data from multiple stations around Arkansas over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AR_Avg_Temps/AR_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_AVG_Temp_AZ: {
        title: 'Arizona Average Temperatures',
          description: 'A collection of data from multiple stations around Arizona over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/AZ_Avg_Temps/AZ_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_AVG_Temp_CA: {
        title: 'California Average Temperatures',
          description: 'A collection of data from multiple stations around California over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/CA_Avg_Temps/CA_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Sci_ESci_AVG_Temp_CO: {
        title: 'Colorado Average Temperatures',
          description: 'A collection of data from multiple stations around Colorado over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/CO_Avg_Temps/CO_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_AVG_Temp_FL: {
        title: 'Florida Average Temperatures',
          description: 'A collection of data from multiple stations around Florida over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/FL_Avg_Temps/FL_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_AVG_Temp_ME: {
        title: 'Maine Average Temperatures',
          description: 'A collection of data from multiple stations around Maine over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/ME_Avg_Temps/ME_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_AVG_Temp_ND: {
        title: 'North Dakota Average Temperatures',
          description: 'A collection of data from multiple stations around North Dakota over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/ND_Avg_Temps/ND_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_AVG_Temp_NY: {
        title: 'New York Average Temperatures',
          description: 'A collection of data from multiple stations around New York over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/NY_Avg_Temps/NY_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_AVG_Temp_WA: {
        title: 'Washington Average Temperatures',
          description: 'A collection of data from multiple stations around Washington over a period of about 100 years',
        path: 'FathomDocs/Science/E_Sciences/AVG_Temps/WA_Avg_Temps/WA_Avg_Temps.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_Concord_Weather: {
        title: 'Concord Weather',
          description: 'Explore information about the weather in Concord',
        path: 'FathomDocs/Science/E_Sciences/Concord_Weather/Concord_Weather.json',
          ready: false,
          categories: ['earth_sciences']
      },
      Scie_ESci_Earthquakes: {
        title: 'Earthquakes',
          description: 'Explore earthquakes across California and western Nevada',
        path: 'FathomDocs/Science/E_Sciences/Earthquakes/Earthquakes.json',
          ready: false,
          categories: ['earth_sciences']
      },
      Scie_ESci_Global_Carbon: {
        title: 'Global Carbon',
          description: 'A case table containing yearly carbon dioxide emissions from various sources around the world',
        path: 'FathomDocs/Science/E_Sciences/Global_Carbon/Global_Carbon.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_Iowa: {
        title: 'Iowa Weather',
          description: 'Explore weather information Mr. Frye gathered information about Marion, Iowa, using instruments and procedures, for 1096 days.',
        path: 'FathomDocs/Science/E_Sciences/Iowa/Iowa.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_Kobe: {
        title: 'Kobe Earthquake',
          description: 'Explore the seismograph recording of the Kobe earthquake on January 16, 1995, in Australia.',
        path: 'FathomDocs/Science/E_Sciences/Kobe/Kobe.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_Mauna_Loa: {
        title: 'Mauna Loa Carbon Levels',
          description: 'A case table of the levels of CO2 from 1958 to 2010 on Mauna Loa',
        path: 'FathomDocs/Science/E_Sciences/Mauna_Loa/Mauna_Loa.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_North_American: {
        title: 'North American Earthquakes',
          description: 'A compilation of North American earthquakes from 1920 to 1989 of the magnitude 4.5 and higher.',
        path: 'FathomDocs/Science/E_Sciences/North_American/North_American.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_R_Carbon: {
        title: 'Regional Carbon Levels',
          description: 'A collection of regional CO2 emissions from the burnin gof fossil-fuels, manufacturing cement, and gas flaring from 1751-2009.',
        path: 'FathomDocs/Science/E_Sciences/R_Carbon/R_Carbon.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_South_Pole: {
        title: 'South Pole Temperatures',
          description: 'A case table showing the temperatures recorded at the South Pole every month from the year 1957 to the year 1988.',
        path: 'FathomDocs/Science/E_Sciences/South_Pole/South_Pole.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_Tides: {
        title: 'Tides',
          description: 'Explore data of the tide patterns of Alcatraz Island, in California, and Birch Island, in Maine.',
        path: 'FathomDocs/Science/E_Sciences/Tides/Tides.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_Tree_Rings: {
        title: 'Tree_Rings',
          description: 'Are there any relationships between the growth of the tree and historical weather?',
        path: 'FathomDocs/Science/E_Sciences/Tree_Rings/Tree_Rings.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_ESci_Weather_Machine: {
        title: 'Weather Model',
          description: 'A model of a weather pattern generated by a weather machine.',
        path: 'FathomDocs/Science/E_Sciences/Weather_Machine/Weather_Maching.json',
          ready: true,
          categories: ['earth_sciences']
      },
      Scie_PhysChem_Boyle: {
        title: "Boyle's Law",
          description: 'A case table of the data of the Boyle Pressure vs. Volume Experiment in 1662.',
        path: 'FathomDocs/Science/PhysChem/Boyle/Boyle.json',
          ready: true,
          categories: ['physics_and_chemistry']
      },
      Scie_PhysChem_Elements: {
        title: "Periodic Table",
          description: 'A case table with information about all of the elements of the periodic table.',
        path: 'FathomDocs/Science/PhysChem/Elements/Elements.json',
          ready: true,
          categories: ['physics_and_chemistry']
      },
      Scie_PhysChem_Heating: {
        title: "Heating",
          description: 'How is the temperature of water affected by the length of time it is heated?',
        path: 'FathomDocs/Science/PhysChem/Heating/Heating.json',
          ready: true,
          categories: ['physics_and_chemistry']
      },
      Scie_PhysChem_Panel: {
        title: "Solar Panel",
          description: 'Explore information gathered from a project done with a solar panel.',
        path: 'FathomDocs/Science/PhysChem/Panel/Panel.json',
          ready: true,
          categories: ['physics_and_chemistry']
      },
      Scie_PhysChem_Radiosonde: {
        title: "Weather Balloon",
          description: 'Find relationships in data were gathered during a weather balloon ascent.',
        path: 'FathomDocs/Science/PhysChem/Radiosonde/Radiosonde.json',
          ready: true,
          categories: ['physics_and_chemistry']
      },
      Scie_PhysChem_RB_Ball: {
        title: "Rubber Band Ball",
          description: 'Explore an experiment about the size and bounce height of a rubber band ball',
        path: 'FathomDocs/Science/PhysChem/RB_Ball/RB_Ball.json',
          ready: true,
          categories: ['physics_and_chemistry']
      },
      Scie_Tech_Airplanes: {
        title: "Airplanes",
          description: 'A case table about the operation statistics of various airplane models in 1999',
        path: 'FathomDocs/Science/Technology/Airplanes/Airplanes.json',
          ready: true,
          categories: ['technology']
      },
      Scie_Tech_Cars: {
        title: "Cars",
          description: 'Explore information about car models from 1993',
        path: 'FathomDocs/Science/Technology/Cars/Cars.json',
          ready: true,
          categories: ['technology']
      },
      Scie_Tech_Moore_Law: {
        title: "Moore's Law",
          description: 'Explore the trend in the evolution of transistors that was discovered by Gordan Moore',
        path: 'FathomDocs/Science/Technology/Moore_Law/Moore_Law.json',
          ready: true,
          categories: ['technology']
      },
      Scie_Tech_Nails: {
        title: "Nails",
          description: 'How does the measurement of a nail relate to the penny size of the nail?',
        path: 'FathomDocs/Science/Technology/Nails/Nails.json',
          ready: true,
          categories: ['technology']
      },
      SocSci_CA_Alberta2024: {
        title: "Receipts from Alberta 2024",
          description: 'Explore data about purchases made by people 20-24 years old in Alberta, Canada.',
        path: 'FathomDocs/Social_Science/Canada/Alberta2024/Alberta2024.json',
          ready: true,
          categories: ['canada']
      },
      SocSci_CA_Metro: {
        title: "Canadian Metro Areas",
          description: 'What are the relationships between each of the Metro Areas in Canada?',
        path: 'FathomDocs/Social_Science/Canada/Canada_Metro/Canada_Metro.json',
          ready: true,
          categories: ['canada']
      },
      SocSci_CA_Gov_Debt: {
        title: "Government Debt",
          description: 'Explore information about debt in the Canadian government.',
        path: 'FathomDocs/Social_Science/Canada/Gov_Debt/Gov_Debt.json',
          ready: true,
          categories: ['canada']
      },
      SocSci_CA_Int_Export: {
        title: "International Exports",
          description: 'Compare the amounts of each item exported in Canada',
        path: 'FathomDocs/Social_Science/Canada/Int_Exports/Int_Exports.json',
          ready: true,
          categories: ['canada']
      },
      SocSci_CA_Int_Imports: {
        title: "International Imports",
          description: 'Compare the amounts of each item imported in Canada',
        path: 'FathomDocs/Social_Science/Canada/Int_Imports/Int_Imports.json',
          ready: true,
          categories: ['canada']
      },
      SocSci_CA_Military_69: {
        title: "Military Personnel",
          description: 'Find relationships between the number of military personnel per year and historical events',
        path: 'FathomDocs/Social_Science/Canada/Military_69/Military_69.json',
          ready: true,
          categories: ['canada']
      },
      Sports_Summer_Olympics: {
          title: "Summer Olympics",
          description: 'Compare the number of medals each country has won in the Summer Olympics',
          path: 'FathomDocs/Sports/Summer_Olympics/Summer_Olympics.json',
          ready: false,
          categories: ['sports']
      },
      SocSci_CA_CPI_Canada: {
          title: "CPI Canada",
          description: 'Explore information about the CPI for Canada annually, from 1914 to 2006.',
        path: 'FathomDocs/Social_Science/Canada/CPI_Canada/CPI_Canada.json',
          ready: true,
          categories: ['canada']
      },
      SocSci_CA_Crime_Canada: {
          title: "Crime Canada",
          description: 'Find relationships among rates of different types of crime from 1977'
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
        table='',
        //tdReady=$('<td>').append($('<input/>', {'type':'checkbox'})),
        launchLink=$('<a target = "_blank" href=' + docURL +'>Launch</a>'),
        linkLink=$('<a href=' + url+path + '>Link</a>'),
        tdLaunch=$('<td>').addClass('launch-button').attr({'id':val+"-launch"}),
        tdLink = $('<td>').addClass('link-button').attr({'id':val+"-link"});

      console.log(val+'->'+map[val].name + ' idx is ' + idx);
      console.log("Category is: "+ map[val].categories[0]);
      switch (map[val].categories[0])  {
        case "probability": table=$('#probability-table'); break;
        case "model": table=$('#models-table'); break;
        case "map": table=$('#maps-table'); break;
        case "education": table=$('#education-table'); break;
        case "langarts": table=$('#language-arts-table'); break;
        case "algebra": table=$('#algebra-table'); break;
        case "calculus": table=$('#calculus-table'); break;
        case "geometry": table=$('#geometry-table'); break;
        case "num_theory": table=$('#numtheory-table'); break;
        case "other_math": table=$('#math-other-table'); break;
        case "astronomy": table=$('#astronomy-table'); break;
        case "biology": table=$('#biology-table'); break;
        case "earth_sciences": table=$('#earthscience-table'); break;
        case "physics_and_chemistry": table=$('#physics-table'); break;
        case "technology": table=$('#technology-table'); break;
        case "canada": table=$('#socsci-table'); break;
        case "sports": table=$('#sports-table'); break;
        default: table=$("#sample-document-list");
      }
      console.log("Table ID is: " + table);

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
    //table.appendTo('#sample-document-list');
  }
  buildPage();
});