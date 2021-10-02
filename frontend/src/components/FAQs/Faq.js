import React from 'react'
import './Faq.css'

function Faq() {

    let question1=document.getElementById("question1")
    let question2=document.getElementById("question2")
    let question3=document.getElementById("question3")
    let question4=document.getElementById("question4")
    let ansbox=document.getElementById("ansbox")
    console.log(question1)
    if(question1!==null){
        question1.onmouseover=()=>{
            ansbox.style.display="block"
            ansbox.innerHTML="#1: COVID-19 has a higher rate of severe disease and mortality in nearly every age group, compared with influenza (flu).John Hopkins Bloomberg School of Public Health reported that “COVID-19 has killed more people in the US than flu has in the last five years.”In the UK, data revealed that between January-August, COVID-19 killed 3.4 times as many people in 2020 than flu and pneumonia combined.The US Centers for Disease Control and Prevention (CDC) estimate that in the United States flu has resulted in “between 12,000-61,000 deaths annually since 2010.” COVID-19 has resulted in more than 304,000 deaths in the US. "
        }
        question1.onmouseout=()=>{
            ansbox.style.display="none"
        }
        question2.onmouseover=()=>{
            ansbox.style.display="block"
            ansbox.innerHTML="#2: This depends very much on where people live and how old they are, with some parts of the world hit harder than others, and some age groups being affected more, such as older people. However, even in countries where the COVID-19 death rate seems relatively low, the indirect impact on reduced health services, vaccine supply shortages, and reluctance to seek medical treatment for fear of infection is having a drastic impact and putting tens of millions of people at risk – including children and newborns."
        }
        question2.onmouseout=()=>{
            ansbox.style.display="none"
        }
        question3.onmouseover=()=>{
            ansbox.style.display="block"
            ansbox.innerHTML="#3: Mask wearing is a very simple and effective way to reduce transmission and save lives. The degree of protection depends on the type of mask, how well they worn and on other factors such as the behaviour of people wearing them and the behaviour of air droplets in different settings.Masks alone are not enough to fully protect someone from the virus, but they still have an essential role to play in protecting high risk individuals, such as frontline health care workers. For most people the greatest benefit lies not in protecting the wearer, but those around them. When combined with other safety measures like physical distancing and practicing good hygiene, they are a very effective tool with little to no disruption to normal life."
        }
        question3.onmouseout=()=>{
            ansbox.style.display="none"
        }
        question4.onmouseover=()=>{
            ansbox.style.display="block"
            ansbox.innerHTML="#4: Historically, the most successful way to achieve herd immunity is actually through mass vaccination. This is a much safer route as the alternative is for roughly 60% of the population to be infected with COVID-19 which essentially means leaving the virus unchecked.Attempting to achieve natural herd immunity through infection will lead to a rise in cases, and a surge in the number of deaths. Moreover, natural immunity to coronaviruses usually only lasts for up to a couple of years. As Kristian Andersen, an immunologist at the Scripps Research Institute in California warned, this approach could “lead to unacceptable and unnecessary untold human death and suffering.” "
        }
        question4.onmouseout=()=>{
            ansbox.style.display="none"
        }
    }

    return <div className="faq mt-5">
        <h2 id="faqsheading" className="mt-3">FAQ's</h2>
        <div className="FaqBox">
            <div className="box box1">
                <div className="question question1" id="question1">1. IS COVID-19 WORSE THAN FLU?</div>
                <div className="question question2" id="question2">2. HOW DOES COVID-19 COMPARE TO OTHER PUBLIC HEALTH THREATS?</div>
                <div className="question question3" id="question3">3. HOW EFFECTIVE ARE MASKS AND DO THEY ALSO NEED TO COVER MY NOSE?</div>
                <div className="question question4" id="question4">4. WOULD IT BE POSSIBLE TO ACHIEVE HERD IMMUNITY WITHOUT VACCINES?</div>
            </div>
            <div className="box box2">
                <div className="ansbox" id="ansbox">

                </div>
            </div>
        </div>
        </div>
}

export default Faq
