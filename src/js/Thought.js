import React, { useEffect, useState } from 'react'

const Thought = () => {
    const thoughtList = [
        "\"The more that you read, the more things you will know. The more you learn, the more places you'll go!\"- Dr Seuss",
        "\"The more you give away the happier you become.\"",
        "\"Worry is a misuse of the imagination.\" – Dan Zadra",
        "\"Logic will take you from A to B. Imagination will take you everywhere.\"- Albert Einstein",
        "\"Be yourself, for everybody else is already taken.\"- Oscar Wilde",
        "\"When you know better, you do better.\"- Maya Angelou",
        "If you want to be more powerful in life, educate yourself. It's that simple.",
        "\"When you talk, you are only repeating something you know. But if you listen, you may learn something new.\" – Dalai Lama",
        "\"Learn as much as you can while you are young, since life becomes too busy later\"- Dana Stewart Scott",
        "\"The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.\"- Brian Herbert",
        "\"I don't love studying. I hate studying. I like learning. Learning is beautiful.\" – Natalie Portman",
        "\"If you have good thoughts, they will shine out of your face like sunbeams and you will always look lovely.\" – Roald Dahl",
        "\"Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts.\" – Albert Einstein",
        "\"You're braver than you believe and stronger than you seem, and smarter than you think.\" – Christopher Robin",
        "\"In any moment of decision, the best thing you can do is the right thing. The worst thing you can do is nothing.\" – Theodore Roosevelt",
        "\"Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world.\" – Desmond Tutu",
        "\"When I was young, I admired clever people. Now that I am old, I admire kind people.\" – Abraham Joshua Heschel",
        "\"Three things in human life are important: The first is to be kind; the second is to be kind, and the third is to be kind.\" – Henry James",
        "\"When you are kind to others, it not only changes you, it changes the world.\" – Harold Kushner",
        "\"Life is mostly froth and bubble. Two things stand like stone. Kindness in another's trouble, courage in your own.\" – Adam Lindsay Gordon",
        "\"Not only must we be good, but we must also be good for something.\" – Henry David Thoreau",
        "\"Yesterday is history. Tomorrow is a mystery. Today is a gift. That's why we call it 'The Present'.\"- Eleanor Roosevelt",
        "\"May you live all the days of your life.\" – Jonathan Swift",
        "\"The time is always right to do what is right.\" – Martin Luther King, Jr.",
        "\"Why fit in when you were born to stand out?\" – Dr Seuss",
        "\"There is only one happiness in this life, to love and be loved.\" – George Sand",
        "\"Love yourself. It is important to stay positive because beauty comes from the inside out.\" – Jenn Proske",
        "\"Let us always meet each other with a smile, for the smile is the beginning of love.\" – Mother Teresa",
        "\"The most important thing in the world is family and love.\" – John Wooden",
        "\"Sometimes the heart sees what is invisible to the eye.\" – H. Jackson Brown, Jr.",
        "\"A leader is one who knows the way, goes the way and shows the way.\" – John C. Maxwell",
        "\"If your actions inspire others to dream more, learn more, do more and become more, you are a leader.\" – John Quincy Adams",
        "\"No man will make a great leader who wants to do it all himself or get all the credit for doing it.\" – Andrew Carnegie",
        "\"I never thought in terms of being a leader. I thought very simply in terms of helping people.\" – John Hume",
        "\"A good leader inspires others with confidence in him; a great leader inspires them with confidence in themselves.\"",
        "\"I hope you believe in yourself, as much as I believe in you.\" – Mom",
        "\"Life is tough, darling, but so are you.\"",
        "\"Mother and children are never truly part, maybe in distance, but never in heart.\"",
        "\"Only mothers can think of the future – because they give birth to it in their children.\" – Maxim Gorky",
        "\"Nothing is particularly hard, if you break it down into small jobs.\" – Henry Ford",
        "\"Mistakes are part of the dues one pays for a full life.\" – Sophia Loren",
        "\"When you do the common things in life in an uncommon way, you will command the attention of the world.\" – George Washington Carver",
        "\"You cannot change the circumstances, the seasons, or the wind, but you can change yourself. That is something you have.\" – Jim Rohn",
        "\"A positive attitude can really make dreams come true – it did for me.\" – David Bailey",
        "\"Most people don't want to be right, they want to be positive, and that doesn't work\"",
        "\"A question opens the mind. A statement closes the mind\""
    ]

    const [thought, setThought] = useState(thoughtList[Math.floor(Math.random() * thoughtList.length)])

    const getThought = () => {
        return thoughtList[Math.floor(Math.random() * thoughtList.length)]
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setThought(getThought())
        }, 30000);
        return () => clearInterval(interval);
    });


    return <div className='thought'>
        <span><i>{thought}</i></span>
    </div>
}

export default Thought