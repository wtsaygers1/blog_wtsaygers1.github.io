import React from 'react'
import BlogNav from './BlogNav'

export default function BackEnd() {
    return (
        <>
        <BlogNav />
        <div className="container">
            <div className="row">
                <div className="col">
                <h4>PHP, MySQL, and Laravel, Oh My!</h4>
                <p>We are in the back end now. The main focus this week was PHP and 
                an introduction to MySQL and Laravel. After six weeks focusing on the 
                front end, it was noticeable starting a new language. I especially experienced 
                my struggle with the new knowledge in the Katas. What was new and beneficial, 
                however, was my ability to think through a problem and get to the solution before 
                writing code. Being logical and orienting myself in solving problems is one of the 
                biggest takeaways from this week. Even if I have no experience in a language, I can 
                still use pseudocode as a base to start any solution.</p> 
                <p>The server side programming is all about the data. The project this week was 
                a database of heroes and heroines and how different tables in the database connect 
                all the information. It was more exposure to the MVC, but this time in a different setting. 
                I have a better understanding of API’s and how the routes are created to connect the 
                front end and the back end. It was a significant amount of information to take in one week, 
                but next week will be a dive into Laravel which is a framework for PHP, and if I 
                have learned anything it’s that frameworks are beneficial.</p>
                <h4>Shhhhh!!! This Is a Library</h4>
                <p>Laravel is fantastic! It is beefy and too much to digest in one week but using 
                eloquent makes working with models much faster and more manageable. I want to revisit 
                the documentation and get more experience with Laravel to understand its powerful usage.</p> 
                <p>I was developing for a library this week and created a database using CRUD operations. 
                CRUD stands for create, read, update, and delete. Architecting the database was the most 
                interesting portion of the project. It gave new insight into how a library functions 
                and keeping track of all the information. Individual tables in the database had to 
                be created for users, books, authors, checkouts to name a few. Bridge tables were then needed 
                to pivot from one table to the next. After creating migrations, models, controllers, 
                factories, and seeders, I programmed the API routes to perform the CRUD operations.</p> 
                <p>Moving forward will be full stack web development as I have been introduced to all the 
                languages touched in Awesome Inc U. I am eager to get back into React as it feels just out 
                of reach of my understanding to utilize it effectively.</p>
                </div>
            </div>
        </div>
        </>
    )
}
