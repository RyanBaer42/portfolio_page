const projects= [
    {
        name: 'Apartment Scraper',
        image:'/Gifs/apartmentscraper.gif',
        skills: ['TypeScript', 'PostgreSQL', 'React', 'Express.js', 'Cheerio.js'],
        overView: 'Scrape the first 100 listings (title, image url) from https://www.sreality.cz/en (flats, sell) and save it in a Postgresql database. Then show these 100 items on a page (with pagination). The solution must be written in Typescript & React.',
        link: 'https://github.com/RyanBaer42/apartment_scraper'
    },
    {
        name: 'Backcountry Bookings',
        image: '/Gifs/backcountry.gif',
        skills: ['React', 'React Router', 'SCSS', 'TypeScript', 'AWS s3', 'Cypress.io'],
        overView: 'This website is a comprehensive conglomerate of campsite information from around the country, designed to provide campers with an easy-to-navigate and reliable platform for finding the perfect campsite for their outdoor adventures.',
        link: 'https://github.com/Backcountry-Bookings/backcountry_fe'
    },
    {
        name: 'Fit Lit',
        image: '/Gifs/fitlit.gif',
        skills: ['JavaScript', 'Chart.js', 'CSS', 'HTML5', 'RESTful API', 'Mocha/Chai'],
        overView: 'Tracking progress while going through your health and wellness journey can be difficult and complicated. Fortunately FitLit is here to save the day! Through this web app user data can be collected, stored, and displayed to the user in truly meaningful ways.',
        link: 'https://github.com/smithkirsten/fitlit-group-project'
    },
    {
        name: 'Rancid Tomatillos',
        image: '/Gifs/rancid.gif',
        skills: ['React', 'React Router', 'Lifecycle Methods', 'glide.js', 'Cypress.io'],
        overView: 'Meet the next best thing to Rotten Tomatos... Moldy Turnips!! Choose from a list of movies and select a specific movie to see more details. Navigate to and from the selected movies page using React router.',
        link: 'https://github.com/RyanBaer42/rancid_tomatillos'
    }
]

export default projects