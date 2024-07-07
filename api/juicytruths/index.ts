import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: { "Content-Type": 'application/json' },
        body: { responseMessage, juicytruths } 
    };

};

export default httpTrigger;

const juicytruths = [
    {
        "Category": "Truth",
        "Question": "Do you (or did you growing up) have any strange family traditions?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What did the holidays look like in your family? What was your favourite thing about the holidays?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What makes you the most angry?",
        "Follow Up Q's": "What trigger do you think is being activated when you get angry and how can you deal with this is a healthier way?"
    },
    {
        "Category": "Truth",
        "Question": "What is something you've always wanted to try",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is something you would never try",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "Is you could have any pet, what kind of pet would you have",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "Is you had the option to go back or forward in time, what would you choose",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "If you could change one thing about your past, what would it be?",
        "Follow Up Q's": "What else about your life would change as a knock on effect of that one thing changing? Would you still want to change it?"
    },
    {
        "Category": "Truth",
        "Question": "If you could have one thing for certain in your future, what would it be?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "If you had the opportunity to see your future, woud you?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "If you could swap souls with someone for a day to see, feel, think how they do, who would you choose?",
        "Follow Up Q's": "Which of your friends would you choose/any person alive or dead"
    },
    {
        "Category": "Truth",
        "Question": "if you could choose any person, alive or dead to have dinner with, who would you choose.",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is your favorite thing to talk about? What topics really grab your interest?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What TV character do you resonate with the most and why?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "Who has had the biggest impact on your life?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "Who has inspired you",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What are you passionate about?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What are 4 of your core values and do you live by them - give examples of how you are or aren't.",
        "Follow Up Q's": ""
    },
    {
        "Category": "juicy Truth",
        "Question": "Where have you been living inauthentically?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "How have you changed over the years? What were you like then (5, 10, 20 years ago) compared to now.",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "If you think back at different parts/stages of your life, which phase seems the most different to how you are now",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Have you ever had a moment of change that set your life on a different trajectory? What was it?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is the best compliment someone could give you?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What makes you melt when someone says it to you",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What are your boundaries in sex?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What does intimacy look/feel like to you?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What acts of service makes you feel the most appreciaited/loved/supported?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is your relationship pattern? ",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What do you bring to the table in your relationships?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What makes you amazing to date?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What gifts do you most enjoy receiving",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What has been the best gift you have ever received",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What has been the nicest thing you have ever done for someone else",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What has been the nicest thing someone has done for you?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What's something about you most people are shocked to hear?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Where is the craziest place you've had sex",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What is the kinkiest thing you have done",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is your view on open relatoinships? Have you had one, would you be open to one?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What does quality time look like to you? What is your favourite way to spend your time with someone?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is the most meaningful question someone could ask you that makes you feel seen/excited.",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is the biggest compliment someone could give you?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What makes you feel sexy",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What is your deepest desire",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What turns you on",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Share one of your sexual fantasies",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "How do you pleasure yourself?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "How do you show love to yourself?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is your love language and how do you show it to yourself?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What does your self care routine look like?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What makes you feel most productive?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What do you desire in life?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What was your first sexual experience",
        "Follow Up Q's": "How did you explore sex when you were younger"
    },
    {
        "Category": "Truth",
        "Question": "Describe your perfect date",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What words of affirmations do you like to hear most?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Describe your best/worst kiss",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Describe your most awkward/worst sexual experience",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What do you like the most during sex that you are often afraid/shy to ask for",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Share your juiciest orgasm story",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What was your most embarrassing moment",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is your favourite childhood memory",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What were you like as a child?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What did you love to do as a child that you don't do now",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Describe or demonstrate how you like to be touched.",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Whats your biggest turn off",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What was the most challenging situation you've had to deal with and how did you get through it",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What's the saddest you've ever been?",
        "Follow Up Q's": "How did you process it? How did you heal/come out of it."
    },
    {
        "Category": "Juicy Truth",
        "Question": "What is your most painful memory",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What's the most difficult thing you have ever done? (by choice)",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What's been your biggest heartbreak? How did youovercome it?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What was your biggest cringe moment?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "What parts of your life are mostresponsible for who you are today?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Juicy Truth",
        "Question": "Who do you aspire to be?",
        "Follow Up Q's": "How close are you to that person?"
    },
    {
        "Category": "Truth",
        "Question": "How do you know when somethign is or isn't right for you?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What do you love about the city you live in? Is it the same as your home town? If not, what did you love about your home town",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What situation has had the biggest ripple effect on your life?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What person has been the most responsible for your growth?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth",
        "Question": "What is your worst habit and what is keeping you from dropping it?",
        "Follow Up Q's": "How do you think your life would change if you dropped that habit? Do you actually want to drop it, and if so, what could you do to finally kick it to the curb?"
    },
    {
        "Category": "",
        "Question": "How old would you be if you didn’t know how old you are? (do you feel older and younger than your age)",
        "Follow Up Q's": "Do you think age matters? Is it how old you are or how old you feel that matters? "
    },
    {
        "Category": "",
        "Question": "What will people remember you for?",
        "Follow Up Q's": "What would you want people to say in your obituary?"
    },
    {
        "Category": "",
        "Question": "Would you want to be famous? Why or why not?",
        "Follow Up Q's": "If you were famous, how long would you want it to last and how do you think it would change who you are currently?"
    },
    {
        "Category": "",
        "Question": "What book has had the most impact on you, or which book would you most likely recommend to someone to read and why?",
        "Follow Up Q's": ""
    },
    {
        "Category": "",
        "Question": "f you found out the world was ending in a year, how would you spend your time? Remember that the world would be ending in a year for everyone else, too. How would that affect your options?",
        "Follow Up Q's": ""
    },
    {
        "Category": "",
        "Question": "What is the lie you tell yourself most often?",
        "Follow Up Q's": ""
    },
    {
        "Category": "",
        "Question": "What are the day-to-day things you do that really make you feel good? Do you find yourself doing them as often as you’d like to? If no, why not?",
        "Follow Up Q's": ""
    },
    {
        "Category": "",
        "Question": "f there were a way to download your memories into a searchable spreadsheet, would you do it?",
        "Follow Up Q's": ""
    },
    {
        "Category": "",
        "Question": "If you could have a second chance at one event in your life, what would you choose? What would you do differently? ",
        "Follow Up Q's": "How would your life be different now?"
    },
    {
        "Category": "",
        "Question": "What is your favorite thing about yourself?",
        "Follow Up Q's": "What is your least favourite thing about yourself?"
    },
    {
        "Category": "",
        "Question": "What do you wish you could change about yourself?",
        "Follow Up Q's": "What is keeping you from changing the things you’d like to change about yourself?"
    },
    {
        "Category": "",
        "Question": "If you could have the credit for creating or be involving in creating any piece of art — painting, music, movie, etc. — which piece of art would you choose? ",
        "Follow Up Q's": "Would you choose based on the money and fame that the piece of art would get you, or would you choose a piece of art you really loved?"
    },
    {
        "Category": "",
        "Question": "How much time do you think you’ve spent watching TV in your life?  How does that make you feel?",
        "Follow Up Q's": ""
    },
    {
        "Category": "",
        "Question": "If you could tell your younger self any one thing, what would it be?",
        "Follow Up Q's": ""
    },
    {
        "Category": "",
        "Question": "In your life, have you been happier when you’ve had a lot of options, or when your options were limited?",
        "Follow Up Q's": ""
    },
    {
        "Category": "",
        "Question": "What do you think the world will look like in 300 years?",
        "Follow Up Q's": "Will you want to be around for it? How would you prefer the world to look like? WHat's your utopia?"
    },
    {
        "Category": "Truth",
        "Question": "Would you rather have a delicious meal and still be hungry or a mediocre meal and be full?",
        "Follow Up Q's": ""
    },
    {
        "Category": "Truth ",
        "Question": "What's your best hidden talent?",
        "Follow Up Q's": ""
    }
]
