import React from 'react'

export default function FrontEnd() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <h4>Just Bootstrap It</h4>
                <p>Well we are finally in person, working in a big open, teal room. 
                Our days will start with warm-up Katas, a Stand-Up update, Break/Fix, 
                and tons of learning new material. A more thorough exploration of JavaScript, 
                Atomic Design Principles, and the CSS framework, Bootstrap, are the main goals 
                of the week. JavaScript is a language that utilizes objects, and I am gaining an 
                understanding of how those objects are used through variables, functions, and 
                data structures. The material is fast and quite furious but I want to have a 
                good grasp on the fundamentals to have success in this industry.</p>
                <p>Atomic Design is a breakdown of websites into the parts that make 
                them. It focuses on the atoms, molecules, organisms, templates, and pages 
                of the web. Every site and app contain these design principles. It makes the 
                web feel like a living entity that is created using the smallest elements but 
                when those elements are designed with a purpose, a system is created that relies 
                on every other part to function in the way it was meant.</p> 
                <p>The main project this week was the Campaign Poster which focused 
                on using Bootstrap. Bootstrap was created by Twitter as a framework 
                for CSS and applying style to a project. The phrase container, row, 
                column is embedded in my brain as an organization system. I got lost in 
                many div components but it was nice to have previously created code to 
                utilize in my projects. I want to explore more of Bootstrap and the layouts, 
                components, utilities and everything else of the framework.</p>
                <h4>API’s Are Cool</h4>
                <p>This week, I demoed The MindReader and Weather App project. MindReader 
                focused on Single Page Applications (SPA) which are all the rage and dynamic 
                rendering. The project needed to update its view as the user progressed through 
                the app. It was fun to see parts of the project change based on what the user did. 
                Also, it was an excellent example of thinking of issues that may arise while a user 
                is interacting with an app. The issue of how a SPA dynamically renders when moving 
                not just forward but backwards as well was a useful thought exercise and practice this week.</p>
                <p>Another fun tool introduced this week were API’s or an Application Programming 
                Interface. I created a Weather App using Axios to make an API call and populate 
                the page with data from JSON(JavaScript Object Notation). If what you just read 
                doesn’t make any sense, then you are in the same boat that I was at the beginning 
                of this week. No worries, I’ll try to explain what it all means. Axios is a tool 
                to get and save data from an API. I had to use what is called a promise to get 
                the data which is stored as JSON, which is how a computer can read the data, and 
                then find the specific data I wanted for my app so that the user can see the information 
                they wanted. It was another busy week, and I don’t think that is changing anytime in 
                the near future.</p>
                <h4>A New Experience With Tic Tac Toe</h4>
                <p>This week, I built a Tic Tac Toe application and learned about the 
                Model-View-Controller design. Model-View-Controller of MVC is a design 
                that breaks down the parts of an application. The model is all about the 
                data and logic of an application. The view is exactly what you would think. 
                It is the visual of the user interface. The controller is the bridge between 
                the model and view, and it manipulates the data to render what the user will 
                see and interact with. I like to think of the three sections as a tripod that 
                rely on one another. If one leg breaks then everything tumbles. I studied this 
                and applied the knowledge to the childhood classic game Tic Tac Toe.</p>
                <p>Tic Tac Toe is usually a constant in anyone’s life, and I have fond memories 
                of fogging a window or drawing lines in the sand to quickly make a tic tac toe 
                board and play a game with a friend. My most recent memories with Tic Tac Toe creating 
                this app will be of a struggle to manipulate state, structure game data, and dynamically 
                render a board. This week was like wading through thick mud and the end was a simple 
                product, a new outlook on a childhood game, and a desire to grow more in web development.</p>
                <h4>Quick Reflexes With React</h4>
                <p>This was more of a studying week with an introduction to React. React is a framework for 
                JavaScript released by Facebook. It focuses on managing state. Classes, functions, 
                state, props, parent-child relationships, and components are some of the new terminology 
                discussed this week. I can imagine React must be quite powerful for Facebook to utilize 
                it, but for now I am working to understand it. Not much happened this week in terms 
                of projects, but a lot to think about as we wrap up the front end phase in the next 
                two weeks.</p>
                <h4>Using The CLI Makes You a Hacker, Right…</h4>
                <p>Throughout the Bootcamp, we have been using the Command Line Interface(CLI). 
                It is the best way to interact with computers but it is intimidating because I am 
                so new to using it. In the past I only used a Graphical User Interface(GUI) or ‘goo - ey’. 
                The CLI benefits far outweigh the visual pleasantries of the GUI as you are closer 
                in level to communicating with the computer, plus everything I do makes me feel like 
                I am using the backdoor to gain entry to something as simple as a directory.</p> 
                <p>We are exploring the React framework more this week, and I see the benefits using a 
                framework when creating huge applications that have a large number of components and managing 
                state is critical. We created a To Do List this week using React. This app building experience 
                exemplified the use of React because just using React integrated HTML, CSS, and JavaScript. 
                Leaving the world of Vanilla JavaScript has been a struggle, but the pros outweigh the 
                cons by far and I want to get my hands dirtier with React.</p>
                <h4>Can I Take Your Order?</h4>
                <p>This week I was building a restaurant menu using React and an API call 
                to populate the data on the screen. This was an excellent dive into the parent-child 
                relationship and making an axios call to get data from an API. I experienced the importance 
                of keeping track of relationships between components and how components can be reused 
                in an application. I also got a better idea of managing local storage and saving data for a 
                better experience for the user and developing a less expensive product. React triggered a 
                plethora of new possibilities, and I am still waiting to explore the magic I keep hearing 
                about these so-called Hooks.</p> 
                <p>This is our last week focusing on the front end before exploring the back end. This week was 
                an introductory bridge between the two utilizing React and an API built by the instructors. I am excited 
                to get some hands-on experience with the back end and getting into the data, but also looking forward 
                to coming back to the front end in a few weeks and getting a better idea of what it 
                means to be full stack!</p>
                </div>
            </div>
        </div>
    )
}
