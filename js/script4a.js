let submitButton = document.querySelector('#but');
let input = document.querySelector('input');
let form = document.querySelector('form');
let arrow = document.querySelector('.icon-arrow');
let close = document.querySelector('.icon-error');
let check = document.querySelector('.icon-success');
let checkPath = document.querySelector('.icon-success path');
var a = 5;
var numArr = ['roll', '5077', '5572', '5021', '5551', '5052', '5056', '5038', '5601', '5567', '5072', '5048','5074','5013','5517','5073',
'5571','5011','5022','5016','khi', 'har','rav','san','san','nan','gay','vim','kir','nit','man','aso','raj','chi'];
var namArr = ['name', 'VENKAT', 'PRIYANKA', 'BOOBALAKANNAN', 'MIDHUN KUMAR', 'NANTHINI', 'NIVETHITHAI', 'KUTTY KISHORE', 'USHASORNAPRIYA',
    'PRABHU', 'SUSMITHA', 'MPD','THENMOZHI','ARIHARAN','NAANE','TAMILSELVAN','PRIYAN','AMUTAMIL','CALEB','HARISH ATUKARU','BSK', 'HARIHARAN',
    'RAVIBALAJI','SANJAY HARIHARAN','SANDHYA AKKA','NANDINI AKKA','GAYATHRI AKKA','GRANDMA','KIRUTHIK AND SANJAY','NITHIYA AKKA','PERIAMMA','PERIAPPA','APPA','AMMA'
];
var emailArr = ['email', 'venkatbkj@gmail.com', 'priyanka99.arav@gmail.com', 'boobalakannan1999@gmail.com', 'midhunkumarkumaresan@gmail.com',
    'nanmurnar1130@gmail.com', 'nivethithaielangovan@gmail.com', 'kish.annauniv@gmail.com', 'sornapriya12@gmail.com',
    'spsr1998s@gmail.com', 'susmileela98@gmail.com',  'dharshini199812@gmail.com','stmozhi.17@gmail.com','ariharan.29111999@gmail.com',
    'deepak224495@gmail.com','ctamilselvanceg14@gmail.com','kpdarshaan1@gmail.com','amuthamizhkavioviyan@gmail.com','calebrub2@gmail.com','harishatukaru@gmail.com',
    'khishkrish@gmail.com','hariharankrt@gmail.com','aravibalaji@gmail.com','sanjayhariharan1998@gmail.com','','nandinikrishnan22@gmail.com'
];
var hintArr = ['riddle', '33120', '8/2 equals both of us!', 'Person who is playing pubg while u are studying or preparing for exam',
    'DSP lab mate', 'andha Paneer butter masala vaangi tharave illaiye', 'Hey hi! Can you tell me how to swap two values without using a third variable?&#128541; Kandupudi pappom !!',
    "<del>&#2965;&#2985;&#2997;&#3009;&#2965;&#3021;&#2965;&#2985;&#3021;&#2985;&#3007;</del> <br/> &#2965;&#2985;&#2997;&#3007;&#2994;&#3021;&#2965;&#2979;&#3021;&#2975; &#2965;&#2985;&#3021;&#2985;&#3007;<br/>___a/i",
    'Namma birthdays ku canteen matume treat spot', 'img/zprabhu.jpeg', "8d65b9eee5e4cf251ae<br>67c901d1776f8930<br>a1973f63370dcb8<br>e3a5c924796a83 <br>Decrypt using - Rajini naditha oru padathoda kadaisi <br>moonru eluthu(antha padothula vara villian oda peruh<br> Antony &#128520;).  +  The largest number you can represent with <br> 8 bits is _( represent in decimal ) then add 1",
     "<a href=\"a.pdf\" target=\"_blank\">check this pdf</a>",'Ne oruvela company join panniruntha ennoda bday ku next day than join pannirupa.','img/zari.jpeg',"You: enna mama panra<br>Me: vera enna macha lap than nondren",
    "Once you adviced me \" onuu padikartha pudichi padi. <br>Ilana passion aa follow panu.. edhum panama irukatha ipd \".","There you go once to <strong>*basis of duality*</strong> , the <strong>*existence of binary*</strong> of the dear cow you met during the edge of <strong> *Vedas* </strong> of your , to just torture the poor creature you met first in the <strong>Unity</strong> of the <strong>Dear Flower</strong>.",
    "101,52 encoded by input standard adopted first in the year 1963","First time Rep experience .... Marakamudiyumaa ...?",'2+2=4','Twin',"23aam  idathil oru Aandavar irundar .<br>Avara nadi chel unakku arul kedaikkum.","You taught me how to solve rubix cube!?<br/>Or if that doesn't help, try this<br/>You and me are the favorite student for parimala miss!<br/>More me&#129315;&#10084;&#65039;",
    "Master FDFS ku ticket eduthudren macha","Enoda Life la maximum thitu nan unala dhan vaangiruken :p",
    " April and May was always our time of the year",'___ jabam','yummy fish gravy','Always mobile games','Ha Ha Ha(always laughing)','ulagam sutrum valibi','over thinking udambuku aagathu.','Anbana amithiyana caring person.','Loosu'
];
var txtArr = ['quotes',
    "<br/><br/>Happy birthday bro! Have a blast &#128165;&#128165;<br/><br/>From Anicham to Senbagam, onnave irudhom. Thanks for making the hostel life fun. Assess, sem, lab nu ellathulayum unga udhavi illama onnum pannirka mudyathu. <br/><br/>To all those nights I spent doing study with the lights on, watching football and hitting your bed when my team scores ... I wish I had done more &#128540;&#128540;<br/><br/>Also, oorilirundhu thirumbumbodhellam andha Saravana bakery la cake ah vangitu vandhadhuku mikka nandrigal &#128524;",
    "<br/><br/>Hey kd Kamalnath,<br/>&nbsp;&nbsp;&nbsp; The friendship existing between us is something precious and it can't happen easily with everyone. I always proud to be Ur first and best friend in girls. When everyone tried to show their talents or speaking skills or whatever during first sem...you just waited for your turn calmly and throbbed everyone's heart by your incredible talent in the name of presentation ( just fell for the code snippet you included) and the code you used to write on the board during CT period in a optimised way! Going on further, you blasted everything with your intelligence too and whatever subject you touch it ends in V.V.GOOD. But you are definitely not a nerd and naturally you have that fantastic way of observing things and producing it perfectly! Lemme stop here for praising you more!&#128514;...it's just an introduction<br/>.<br/>.<br/>The way we share innumerable secrets and keeping it within is something special. We boost each other often by pouring all the problems and confusions we have...and each of us comes with a solution too (mostly I only balabber&#128584;).. But I too have a part in advising you &#128539; and you got better one time!(nee solli Dan teryum). Will always send clicks of every prepared dish of mine and tempt you more&#129325;. Don't worry I will give you some to taste too and I did that too. Let's hold this beautiful relationship endlessly and wish to be the same special bestie always da kd payale.... Hope this is enough and will deliver all untold things on your day in pc!&#128526;&#128149;....<br/>.<br/>.<br/>Happiest birthday da Mustaffa kd Kamal!<br/>.<br/>.<br/>&#2958;&#2985;&#3021; &#2990;&#2985;&#2980;&#3007;&#2994;&#3021; &#2953;&#2995;&#3021;&#2995; &#2970;&#3019;&#2965;&#2969;&#3021;&#2965;&#2995;&#3016; &#2965;&#3018;&#2975;&#3021;&#2975;&#2997;&#3009;&#2990;&#3021;<br/>&#2984;&#2990;&#3021; &#2970;&#2984;&#3021;&#2980;&#3019;&#2999;&#2969;&#3021;&#2965;&#2995;&#3016; &#2965;&#2979;&#3021;&#2975;&#3009; &#2965;&#2995;&#3007;&#2965;&#3021;&#2965;&#2997;&#3009;&#2990;&#3021;<br/>&#2949;&#2997;&#3021;&#2997;&#2986;&#3019;&#2980;&#3009; &#2984;&#2994;&#3021; &#2953;&#2992;&#3016;&#2965;&#2995;&#3016; &#2965;&#3007;&#2975;&#3021;&#2975;&#2997;&#3009;&#2990;&#3021;<br/>&#2970;&#3009;&#2997;&#3006;&#2992;&#3000;&#3021;&#2991;&#2990;&#3006;&#2985; &#2951;&#2992;&#2965;&#2970;&#3007;&#2991;&#2969;&#3021;&#2965;&#2995;&#3016; &#2986;&#2965;&#3007;&#2992;&#2997;&#3009;&#2990;&#3021;<br/>&#2970;&#3007;&#2993;&#3009; &#2965;&#3015;&#2994;&#3007; &#2965;&#3007;&#2979;&#3021;&#2975;&#2994;&#3021;&#2965;&#2995;&#3021; &#2953;&#2975;&#2985;&#3021; &#2986;&#3015;&#2970;&#2997;&#3009;&#2990;&#3021;<br/>&#2951;&#2984;&#3021;&#2980; &#2949;&#2996;&#2965;&#3007;&#2991; &#2953;&#2993;&#2997;&#3009; &#2958;&#2985;&#3021;&#2993;&#3009;&#2990;&#3021; &#2984;&#3007;&#2994;&#3016;&#2980;&#3021;&#2980;&#3007;&#2992;&#3009;&#2965;&#3021;&#2965;&#2997;&#3009;&#2990;&#3021;..<br/>&#2984;&#2979;&#3021;&#2986;&#2985;&#3021; &#2958;&#2985;&#3009;&#2990;&#3021; &#2965;&#2992;&#2980;&#3021;&#2980;&#3016; &#2984;&#3008;&#2975;&#3021;&#2975; &#2990;&#2993;&#2997;&#3006;&#2980;&#3015;...!!<br/>.<br/>.<br/>&#2951;&#2985;&#3007;&#2991; &#2986;&#3007;&#2993;&#2984;&#3021;&#2980;&#2984;&#3006;&#2995;&#3021; &#2997;&#3006;&#2996;&#3021;&#2980;&#3021;&#2980;&#3009;&#2965;&#3021;&#2965;&#2995;&#3021; &#10084;&#65039;&#128175;",
    "<br/><br/>Heyy Kamal'u&#128515;<br/>     Iniya piranthanaal vaalthukkal macha...santhosama iru da..<br/>J Batch la start panni roommate,orae ooru, lab mate uh group study nu solite polam... Unkita irunthu nirayave kathukalam..<br/>Partiality paarkatha oru Nalla ullam konda jeevan&#129505;..A man with good heart&#128536;...Anbu, paasam, snacks(#cupcake) nu elathaium equal share paanuva&#129325;.<br/>Padi da padi da  soli unnala oru sila subject la pass paniten&#128514;.ipo iruka character oda epovume iru da...luv u...luv u...luv u macha kamal&hearts;&#65039;", 'You are the most sociable,humorous,generous friend.Its always fun to talk to you.Happybirthday',
    "<br/><br/>Heyy topper, ooru kaaara paiyan, game paithiyam, Kalaaikum mannan, vera enna sollalam&#128514; hope you are doing great and good in your very own way. From J batch to till now the same Naughty yet silent killer&#129315;. Actually ellarum college la neraiya memory unkooda solvnga aana enaku memories to cherish with you na adhu indha lockdown la dhan from sharing unnoda game scores to sharing your about your family that was really an awesome memory for me with you unnoda Appa ippovum solren innocent dha Amma is cute &#128525;&#128149; cute aana family neenga&hearts;&#65039; may  God shower all happiness upon you and your Family!&#128519; and marakama next time 50000 thaandidu score ah&#129315;&#129315; seriya.Jokes apart be in touch Kamal &#128527;.Wishing you a healthy and happy Birthday from the bottom of my heart &#128156;&#128154; <br/>                           Lovingly,<br/>                     Nanthini aka aaya&#129318;&#127995;&zwj;&#9792;&#65039;",
    "<br/><br/>LEGEND JIIIIII!!!!!!!<br/><br/>Good boy&#128541;...1st meet ah correct ah niyabagam vechuruka&#128514;..It all started there...You are one among the very few who know me well&#9786;&#65039;...Ippadiyum oru topper iruka mudiyuma nu nenaichu naan aachariya patta jeevan&#128513;    A very very special friend of mine&#128519; from J - Batch till..this time&#129395;...Aana innum andha treat kaana time thaan amaiyala&#128586;..seri lockdown mudinju vechidu&#128524;...Pona treat ah vida naan neraiya selavu vekka poren&#128523;...Be ready&#128520;...Btw..Legend ah mudhan mudhalai petti yedutha perumai yenake&#128378;&#127995;...Aduthu aduthu innum neraiya interviews kuduthu ulagathuku vazhi kaatungal legend jiiiii&#128513;...Stay the same cool-headed person that you are.. who never misses a chance to enjoy the little things in life&#128522;... WISHING YOU A VERY VERY HAPPY BIRTHDAY KAMAL&#129321;",
    "&#2997;&#3007;&#2970;&#3021;&#2970;&#3009;<br/> \"&#2949;&#2994;&#3016;&#2965;&#2995;&#3021; &#2963;&#2991;&#3021;&#2997;&#2980;&#2994;&#3021;&#2994;&#3016;\" &#2986;&#2975;&#2980;&#3021;&#2980;&#3016; &#2986;&#3006;&#2992;&#3021;&#2965;&#3021;&#2965;&#3009;&#2990;&#3021; &#2986;&#3019;&#2980;&#3014;&#2994;&#3021;&#2994;&#3006;&#2990;&#3021;  &#2958;&#2985;&#3021; &#2984;&#3007;&#2985;&#3016;&#2997;&#3007;&#2994;&#3021; &#2984;&#3008; &#2997;&#2992;&#3009;&#2997;&#3006;&#2991;&#3021;.<br/><br/>\"&#2997;&#3007;&#2970;&#3021;&#2970;&#3009;\"<br/>&#2951;&#2985;&#3007; &#2997;&#2992;&#3009;&#2990;&#3021; &#2965;&#3006;&#2994;&#2969;&#3021;&#2965;&#2995;&#3007;&#2994;&#3021; &#2951;&#2985;&#3021;&#2990;&#3009;&#2965;&#2980;&#3021;&#2980;&#3019;&#2975;&#3009;<br/>&#2986;&#2980;&#3007;&#2985;&#3006;&#2993;&#3009; &#2970;&#3014;&#2994;&#3021;&#2997;&#2969;&#3021;&#2965;&#2995;&#3009;&#2990;&#3021; &#2986;&#3014;&#2993;&#3021;&#2993;&#3009; &#2986;&#3014;&#2992;&#3009;&#2997;&#3006;&#2996;&#3021;&#2997;&#3009; &#2997;&#3006;&#2996;&#3021;&#2965;.<br/># &#2984;&#3008; &#2965;&#2994;&#3016; &#2992;&#2970;&#3007;&#2965;&#2985;&#3021;<br/># &#2984;&#3006;&#2985;&#3021; &#2953;&#2985;&#3021; &#2992;&#2965;&#3007;&#2965;&#2985;&#3021;<br/>&#2951;&#2985;&#3007;&#2991; &#2986;&#3007;&#2993;&#2984;&#3021;&#2980;&#2984;&#3006;&#2995;&#3021; &#2984;&#2994;&#3021;&#2997;&#3006;&#2996;&#3021;&#2980;&#3021;&#2980;&#3009;&#2965;&#3021;&#2965;&#2995;&#3021;&#128150;.<br/>                                 -\"&#2965;&#3009;&#2975;&#3021;&#2975;&#3007;\"",
    "<br/><br/>Starting from J - batch&#128524;...<br/>Un name kuda apa theriyaadhu...&#129398;<br/>I got to know abt ur name when Prakash sir asked output for a code and u did that first&#129488;... And also.. asses 1 la 49.5 out of 50 in CT&#129296;!!! Evan da ivan was my first impression &#128520;&#128514;!! <br/>Neenga oru ultra legend topper nu sem 1 results la therinjudhu&#127882;&#128293;!!.<br/>Chapter close..&#128514;<br/><br/>Sem 3 -----> 4/9/2017 <br/>I talked with u for the first time in phone&#129321;... And then I was proud that I got a multi-talented topper frnd&#128524;.. en bday kum nee 12 ku call panna&#128525;.. I was like wow&#10024;... <br/>Every bday everytime... Namma crt ah wish pannom.. &#128513;... <br/>Namma bday treats were the cheap and best la&#128541;&#129395;!! Thavaraama treat vachukitom except this yr I hope&#128519;..<br/><br/>Sem 5----> hiiiii  fraaaaannndddd nu solitu grp la fun panna time la enakum nee msg panni prank panna...oru naal fulla bayandhen&#128527;... <br/>Then IV.. nice memories la.<br/><br/>This quarantine.. un sticker naa pannen.. en sticker nee panna&#129299;.. best la&#129315;.. and I will continue that always&#128123;.<br/><br/>PS : unkuda oru photo kuda urupadiyaa edukala&#128530;<br/><br/>Mr. Samsung boiii&#128171;<br/>Happy happy birthday&#10083;&#65039;.<br/>Have a fantastic life ahead&#127882;.<br/>U were, are and will be my very good frnd always&#9786;&#65039;.<br/>#bff&#128515;",
    "P***, 2&sup2;3&sup2; itha vazhkaila marakave mudiyatha mathiri panita&#129318;&#127995;&zwj;&#9794;&#65039;. Konja naal ku apram lam ne ithu sonnave una thookitu midhichralam nu irukum&#128565;.. <br/>Intha story.. content ... lam enaku normal ah ve varathu even exam la kooda kadha adika theriyathu nrathu unakum theriyum aanalum intha aadu ketu torture panitan.<br/>So enala mudinjatha try panren.<br/>Antha oru naal first day J batch SnH cls anga tha Prabhu UV kootitu poranu solitu veliya vanthappa than meet panom pesunom.<br/>Apa start aanathu last day of clg life varaikum vanthu ninruku...&#128513; Work place onna varala papom.<br/>J batch ore bench days.. lam maraka mudiyathu<br/>Evlo kasta pattum nama dept lab ore lab slot namaku varave ila la&#128514;&#128514; ethachum oru prachana.. <br/>First IV Sriharikota porathuku organize panathu...<br/>LK lab lam unoda obs ah evlo copy adichutu ponalum enoda obs la sulichu vitruvan..<br/>Apram DSP antha evng cls ore sum...<br/>National IV times... <br/>Tsk formation..<br/>Naama pona ela outings...<br/>Intha Raj bhavan ponathulam.. governor ah than miss panitom<br/>Deepak room la gumbala ukanthu kadha pesunathu ...kaluvi oothunathu ..gossips..<br/>Ipo project lab la ukanthu velayadunathu.. antha mouse than edukama vituten&#128517;&#128517;<br/>And Ella resonance vision kum poi Audi la ukanthruvom... Yen ethuku nae theriyathu..<br/>Apram final sem nu solli bsk pecha ketu tnagar ah ye suthitu vanthom antha kadaila sapda<br/>And NON VEG mess marakave mudiyathu ...<br/>Athuvum final yr la enaku kooda iruntha ne irunthanrathu naala than nv mess la irunthen<br/>Sudden ah mothama elarum veg mess maritanga.. ne apa clg varla intern la iruntha.. una epdi vidrathu nu than veg mess pola..<br/>Apram Wednesday night lam tharamana sambavam..<br/>Marupadiyum antha Wednesday nights lam kedaikathula...<br/><br/>Elame athukulla mudinju pochulla<br/>Final sem oda final days ethachum plan pani poiruklam..<br/><br/>Let's plan and go somewhere after this corona ends...(dream than irunthalum....)<br/><br/>Happy Birthday da Kamal&#10083;&#65039;&#10083;&#65039;",
    "<br/><br/>Haii Kamal! <br/>Nama epo meet panom  rep ah thaan meet panom.. &#128514;En da ivlo valanthurkae.. Una nan paka pothulam kaluthu valikuthu... Onuh epaiyum gyabagam vachathu nah... Nee ena kottu potathu&#128514;&#128514;blue shed pakathula atahe thaan maraka mate.. And inonuh dept munadi file ae thooki potathu athae la marakamudiyuma kamal and ur my periappa &#10084;&#65039;&#128514;....Nan ena solanum nuh virumburen nah... Romba moolai ae use panrae.. Pathuu. Moolai veliya vanthura pothu.. Ena la maranthuratha da",
    "<br/><br/>Hello there Kamal! I first became acquainted with you during third sem.I was so desperate to learn Digital Electronics.Though we hadn't spoken much in person,you were kind enough to reply to all my endless doubts and you helped me pass Digital electronics exam.I am so grateful to you for that.I've always admired how you always remain so calm and humble.Those are the best qualities a human can have.Your extreme talents coupled with that calmness can make you reach great heights, so never give up.I've told a lot about you to my family and we were really happy when you got placed in Samsung.Very deserving person.During this lockdown,I've made good memories with you playing Ludo,discussing about Dark and other games.I'll always cherish that.I hope we always stay good friends and I wish you the very best for all your future endeavours.I also hope you had fun solving the picture puzzle.LOL.Once again,A very happy b'day Kamal!&#128522;",
    "<br/><br/>Hii Kamal&#9786;&#65039;! IV tym la irunthu unna nalla theriyum.A gud character, a gud frnd, Topper apram ne mattum eppadi ivlo arivali ah irukka.Paaka silent ah iruka maari theriyum aana ellorayum semaya kalaipa.Be the same always &#129321;.Wish u many more happy returns of the day&#127874;.On your special day, I wish you good luck&#10024;. I hope this wonderful day will fill up with joy&#128522; and blessings.",
    "<br/><br/>Dear Kamal,<br/><br/>Good to know that you are safe and sound amidst this pandemic time. Being your friend I was obligated to do a content for you even though I have no words to say about our relationship.<br/>Being a good buddy from day 1 of college life, I always admired you for your quick wit and smartness. The outings of the 'trio', late night exam preps, Snapture Hunt, Final year gossipings, Lyrical dissections... There are more than enough to explain our memories from our college days. To be fair, I feel like we haven't been as close as your best friends! But I surely can tell that when at my lowest, you offered a hand to me to put myself back to track where I used to be. Be it technical content or involving fun, you always have lots and lots to offer to the fraternity. I think you can make the whole world happy by your wit. Don't ever lose that!<br/><br/>Thank you for sticking with me. I hope our friendship lasts forever. <br/><br/>By the way Happy Birthday to you! Live Long and Prosper!",
    "<br/><br/>Hey kamal...!!! <br/>Hint romba easy ya pochu nu ninaikiren.. Paravala romba padutha venam nu than vittuten. &#128514; en bday ku ne pannathae periya lvl la pannalam nu than idha eduthathu. Kadaisi vara namba plan pota edathula lam sapda mudiyala&#128546;. <br/><br/>Bangalore la aachum fun pannalam nu paatha adhuvum pochu...anyway ellarum meet pannuvom nu nambikka irukku. Unkitta enakku pudichathae unkooda irukkum podhu oru Confidence varum(especially in project&#128514;) ... Missing those days. <br/><br/><br/>Hope you liked our work. <br/>HAPPY BIRTHDAY DA KAMAL..!!! &#10084;",
    "<br/><br/>Kamal : &#128519;<br/><br/>Roommate for 4 yrs.. Topper guy! Ela exam apovum solithara oru jeevan&#10024;. Veetla la irunthu kondu varuviyae antha Cake aa romba miss Pnren&#129319;.    1st yr la best memories na vardha apo elarum ooruku ponathu en bday anaiki...  and 2 days k workshop&#129396;. 2nd yr la Aruvi movie poitu mall ponom la newyear apo..athu &hearts;&#65039; . 3rd la 1st day anaiku roommates edutha selfie&#128064;. 3rd yr la athigma engayum suthala.. 6th sem mudinja aprm boobal Ari oda beach matum than ponom.. and Finally placed in Samsung &#128187;&hearts;&#65039;.  Final yr la aachum konjam outings poirkalam.. but chnces amayala.. namba gang elarum oru nala tour epoyo plan panlam intha corono over ana aprm..&#129305;. Happy birthday Kamal.<br/>Pathinarum petru pallandu vaazhga. Thodarum nam bantham kaalathai vendru &hearts;&#65039;.",
    "<br/><br/>2016 August, Anicham First Floor. I crossed a guy who was playing Clash of Clans. \"Bro, neengalum CoC aaduveengala\" I asked. Little did I know that meet will become the most important incident in my college life. As everyone would have said I dont want to mention you as a Topper, for you are my friend, Guardian angel before exams &#128514;. The Go To person for me when I struggle with transistors and signals. \"The Kamal Swag\" you gave to all the ECE papers tho!<br/>Be Happy as you are !<br/>Be Smart as you are !<br/>I will always be one call/text away macha &#10084;&#65039;.Will always remember the only time you came to senbagam 2nd floor: Just to beat me on my Bday&#128591;&#10084;&#65039;. <br/>Be the same Kamal for me &#10084;&#65039;. <br/><br/>Easy for you da. Decode&#128513;<br/>..     --  ..  ...  ...     -.--  ---  ..-",
"பிறந்த தியதி வாழ்த்து வேண்டினர்,<br/>பிற நண்பர்கள்,<br/>ஆகியபடிக்கு  தன்னிச்சையாக<br/>மனம் சப்தமிட்டதை எழுத<br/>விளைகிறேன் நின் வழியிலேயே.<br/><br/>முதல் நாள் ஞாபகம் இல்லை, ஆயினும்<br/>அனைத்து பிற நாட்களையும் நினைவில் <br/>கொள்ள செய்தாய்,<br/>என் இயல்பு நாட்களை இனிய <br/>நாட்களாக மாற்றி,<br/>இடும்பை கொண்ட பொதெல்லாம்<br/>இடுக்கண் களைந்து,<br/>என் நினைவுகளோடும்<br/>நெஞ்சோடும் கலந்தாய்.<br/><br/>நின் துணையின்றி என் கடந்த <br/>காலம் இருந்திருக்கும் ,ஆனால் <br/>சிறப்பு இருந்திராது,<br/>இது எதிர்காலதிற்கும் பொருந்தும்.<br/><br/>மற்றவர் பார்வையில் உன் <br/>அறிவுகூர்மை வெளிப்பட்ட போதும்<br/>என் பார்வையில் நினது<br/>அப்பழுகற்ற அன்பும்,<br/>பிறரிடம் காணாத பண்பும் வெளிப்பட்டது. <br/>அதுவே உன் நன்நட்பிற்கு சான்றாம்.<br/><br/>உணர்வு அதிகமுறும்போது <br/>வார்த்தைகள் எழாது என்பேன்,<br/>மேல் எழுந்தவை ஏனோ அதிசயம்தான்.<br/>என் உணர்வுகளையும் கடந்து<br/>ஓர் ஒப்பற்ற உறவாக நின்றாய்.<br/><br/>நம் கல்லூரி நாட்கள் போல் அதனினும் மேல் சிறப்பும், புகழும்<br/>பெற்று என்னுடனே <br/>எப்பொழுதும் எனை பிரியாமல் <br/>வாழ்வாயாக,<br/>இனிய பிறந்த தியதி வாழ்த்துக்கள் <br/>விஷால் (எ) கமல்நாத்.",
"<br/><br/>A very Happy Birthday Kamalnath<br>It was always a delight to spend time with you. And I'll always remember you for the unique memories which we shared together. Have a Blessed time ahead in your Life ... !!!",
"<br/><br/>Perussa plan panni website panna aaramichen ..<br/>Oru week full ah design and marketing pannitu irunden ..<br/>Apdiye dhideernu 5 days la intern nu sonnanga ...<br/>Sila peru avanga busy life la naan kekkura content thara 10 min kooda odhukka maatranga ..<br/>Kaduppa irunchu ..<br/>Oru pakkam I am out of time for learning the prerequisites for my intern. Website ah yo naduvula Vida manasilla (As I have already spent 40+ hours in that.)<br/>Andha stressed situation la I was like quitting the website plans and hand it over everything to Deepak.<br/><br/>But I thought I have to invest atleast some more time in our friendship. So I have made my choice to work parallelly while still worrying about my intern.<br/><br/>Deepak illana andha dilemma la website plan eh moodi vechiruppan.<br/>Motha credits um Deepak ku thaan poi serum. Love you Deepu&hearts;&#65039;.<br/><br/>Idellam en solrena ..<br/>I wonder why I am doing this&#129300;. Naa onnume panlannalum yaarum kekka poradilla ..<br/>But why am I suffering myself besides torturing Deepak for a single second surprise ?<br/>Does it worth it ??<br/><br/>Ofcourse Yes, I believe. I want to lay a concrete foundation to our ever lasting friendship.<br/><br/>Orutharukoruthar anbai thavira vera endha vidha edirparpu illama thaan namma natpu malarndadhu ..<br/>(Un mark naalayo..Illa un cake naalayo namma friends aagala&#129322;)<br/><br/>So, I don't want to remind u about our super special bond that has lasted till now.<br/>Rather I would like to make it clear that I am there for u always and I will be, forever.<br/><br/>Karanam illama kalainthu poga idhu KANAVUM illai,<br/>Karanam solli pirinthu poga ithu KAADHALUM illai,<br/>UYIR ullavarai thodarum Unmaiyana Anbu nam NATPU!!<br/>Iniya piranthanal Vazhthukkal Mama&#127874; &#127881;&#129395;<br/>Love you lots &#10084;&#65039;&#10084;&#65039;!!",
"<br/><br/>Happy Birthday macha.. school, batch, yrc, hostel nu onna poitu irunchu.. indha Amazon paya than aasa kaati mosam pantaan. Anyways, distance doesnt matter. Epdiyum en polambal la irundhu nee thappave mudiyathu&#128524;.. Stay the same nanba&#10084;&#65039;",
"&#2949;&#2985;&#3021;&#2986;&#3009; &#2984;&#2979;&#3021;&#2986;&#2985;&#3021; &#2965;&#2990;&#2994;&#3009;&#2965;&#3021;&#2965;&#3009;,<br/><br/>&#2986;&#2995;&#3021;&#2995;&#3007; &#2984;&#3006;&#2975;&#3021;&#2965;&#2995;&#3021; &#2980;&#3018;&#2975;&#2969;&#3021;&#2965;&#3007; &#2965;&#2994;&#3021;&#2994;&#3010;&#2992;&#3007; &#2997;&#2992;&#3016; &#2984;&#2990;&#2980;&#3009; &#2984;&#2975;&#3021;&#2986;&#3006;&#2985;&#2980;&#3009; &#2970;&#3009;&#2990;&#3006;&#2992;&#3021; 6 &#2997;&#2992;&#3009;&#2975;&#2969;&#3021;&#2965;&#2995;&#3006;&#2965; &#2980;&#3018;&#2975;&#2992;&#3021;&#2965;&#3007;&#2993;&#2980;&#3009;..<br/><br/>&#2953;&#2985;&#2980;&#3009; &#2980;&#3007;&#2993;&#2990;&#3016;&#2991;&#3016;&#2991;&#3009;&#2990;&#3021;, &#2949;&#2993;&#3007;&#2997;&#3009;&#2965;&#3021; &#2965;&#3010;&#2992;&#3021;&#2990;&#3016;&#2991;&#3016;&#2991;&#3009;&#2990;&#3021; &#2965;&#2979;&#3021;&#2975;&#3009; &#2986;&#2994; &#2951;&#2975;&#2969;&#3021;&#2965;&#2995;&#3007;&#2994;&#3021; &#2997;&#3007;&#2991;&#2984;&#3021;&#2980;&#3009;&#2995;&#3021;&#2995;&#3015;&#2985;&#3021;..<br/><br/>Room 23&#2994;&#3021; &#2953;&#2985;&#3021;&#2985;&#3019;&#2975;&#3009; &#2951;&#2992;&#3009;&#2984;&#3021;&#2980; &#2986;&#3019;&#2980;&#3009;  &#2986;&#2994; &#2951;&#2985;&#3007;&#2991; &#2984;&#3007;&#2965;&#2996;&#3021;&#2997;&#3009;&#2965;&#2995;&#3021; &#2949;&#2990;&#3016;&#2984;&#3021;&#2980;&#2985;!<br/><br/>&#2953;&#2985;&#3021; &#2990;&#3010;&#2994;&#2990;&#3006;&#2965;&#2997;&#3015; &#2965;&#2994;&#3021;&#2994;&#3010;&#2992;&#3007; &#2990;&#3009;&#2980;&#2994;&#3021; &#2986;&#2992;&#3009;&#2997;&#2980;&#3021;&#2980;&#3015;&#2992;&#3021;&#2997;&#3007;&#2994;&#3021;  &#2958;&#2995;&#3007;&#2980;&#3006;&#2965; &#2980;&#3015;&#2992;&#3021;&#2970;&#3021;&#2970;&#3007; &#2986;&#3014;&#2993;&#3021;&#2993;&#3015;&#2985;&#3021; .<br/><br/>&#2984;&#3008; &#2990;&#3015;&#2994;&#3009;&#2990;&#3021; &#2986;&#2994; &#2953;&#2991;&#2992;&#2969;&#3021;&#2965;&#2995;&#3021; &#2949;&#2975;&#3016;&#2991; &#2990;&#2985;&#2990;&#3006;&#2992; &#2997;&#3006;&#2996;&#3021;&#2980;&#3021;&#2980;&#3009;&#2965;&#3007;&#2993;&#3015;&#2985;&#3021;.<br/><br/>&#2990;&#2965;&#3007;&#2996;&#3021; &#2980;&#3007;&#2965;&#2996;&#3021; &#2986;&#3007;&#2993;&#2984;&#3021;&#2980;&#2984;&#3006;&#2995;&#3021; &#2997;&#3006;&#2996;&#3021;&#2980;&#3021;&#2980;&#3009;&#2965;&#3021;&#2965;&#2995;&#3021; !!<br/>&#2984;&#3010;&#2993;&#3006;&#2979;&#3021;&#2975;&#3009; &#2965;&#3006;&#2994;&#2990;&#3021; &#2997;&#3006;&#2996;&#3021;&#2965;!<br/>&#2984;&#3019;&#2991;&#3021; &#2984;&#3018;&#2975;&#3007; &#2951;&#2994;&#3021;&#2994;&#3006;&#2990;&#2994;&#3021; &#2997;&#2995;&#2992;&#3021;&#2965;!",
              "<br/><br/>Hey kamalnath,<br/>You should've found out me atlest in that second clue, if not fine.<br/>No problem!<br/>I'm Ravi balg (your rival I would say&#128541;, In reality not even close to you&#129303;)<br/>I have known you till our higher education, after that we are separated by choosing different universities.<br/>So as far as I know you, you're a freakn topper even in SSBM as well as in SRK, being a topper you've never shown any kind of proud or anything like that to any of our friends. I really loved that attitude of yours&#128147; Never let that go.<br/>Our friendship really blossom during our time in SRK, though the schools sucks, but we had the best gang ever!&#10084;&#65039;&#10084;&#65039;&#10084;&#65039;<br/>With Sanjay, Dhanush, Jana I can't keep my mouth shut without laughing.<br/>Your teachings, your shortcuts, your ideas, and more importantly your mom's biriyani - all those things which made us survive our schooling.<br/>I really miss all of those and obviously our gang &#128571;<br/>I wanna goes back to those times, cuz adulthood is scary af!&#128375;&#65039;<br/>Fine anyway, thats not gonna happen hard hittting truth<br/>Let's hope that we'll plan and do something all together<br/>OMG I was carried away by all the memories we made in SRK.<br/>So yea a Happy Happy Happy Birthday day to you kamalnath&#127881;&#127881;&#127881;<br/>Stay the same!<br/>Hav a great year ahead and reach heights!&#128144;&#10084;&#65039;<br/>Oh wait you've already reached heights right!? light house &#129315;<br/>LOL!<br/>Just kiddin<br/>Byee and see ya soon!&#129303;&#129303;&#129303;<br/><br/>- with love Balg&#10084;&#65039;<br/><br/>BTW we need to take some good pictures together, cuz all I have is group photo of us during our SSBM shoot and ganesh's ( JGC ) marriage! Remember!&#128248;",
"<br/><br/>I think you are the first and best nerd I have ever met. Became so close friends and had beautiful memories in SRK. Stay awesome macha! &#128150;",
"<br/><br/>My one and only thambhi then, now and forever! Happy Birthday 2020, Have Fun. You will always be in my prayers and may God bless you with lots and lots of happiness in your life.<br><br/><a href=\"videos/sandhyaAkka.mp4\" target=\"_blank\"> A Surprise Gift :) (Click here)</a>",
"<br/><br/>Hi Vichu,<br/>You are my little brother with whom I loved spending my summer vacations. The times that we used play cards and board games for hours and hours together are such precious memories to treasure. <br/>Remember the time I got into trouble with Grandpa for making you walk on the roof of our Mailam house?&#128514;&#128514; <br/>Oh God I used to love those times where we kept running around and getting pampered by our grandparents. <br/>From those times to now, I just can't remember how time flew away and didn't even realize how we are all grown up now.<br/>P. S (I totally remember how you got taller and taller than me and was so jealous of it &#128540;)<br/>Vichu you are a really smart and a brilliant boy and I wish all the happiness in the world for you. <br/>Remember you have got this sister no matter what. I will always protect you and go to any extent to safeguard you. <br/>Love you thambi &#128536;&#128147;<br/>Happy Birthday &#127874;&#127882;&#127881;<br/><br/><a href=\"videos/nandiniAkka.mp4\" target=\"_blank\">A Video Surprise is waiting here.</a>",
"<br><br><iframe src=\"videos/gayathri.mp4\"></iframe>","<iframe width=\"300\" height=\"400\" src=\"videos/grandma.mp4\"></iframe>","<iframe width=\"300\" height=\"400\" src=\"videos/kutties.mp4\"></iframe>","<iframe width=\"300\" height=\"400\" src=\"videos/nithiyaAkka.mp4\"></iframe>","Happy birthday...!!!<br><br/><a href=\"videos/relative.mp4\" target=\"_blank\">A Video Surprise is waiting here.</a>",
"<br/><br/>Vishal wish you many more happy returns of the day you look always charming and you take everything with smiling face which attracts everyone Keep it up<br><br><a href=\"videos/periappa.mp3\" target=\"_blank\">An audio surprise !!</a>",
"<br/><br/>Vishal wish you many more happy returns of the day. Happy birthday. From child hood you are first in your studies. I taught many things  when you are young. Now you teach me many things about modern world. <br>எங்கள் உலகமே நீ தான். வாழ்க்கையில் எல்லா நலமும் பெற்று வாழ வாழ்த்துக்கள்<br><br/><a href=\"videos/appa.mp4\" target=\"_blank\">A Video Surprise is waiting here.</a>",
"<br/><br/><br/>Hai vishal, Many more happy returns of the day. Not only this day, each and every day is the happiest one for you.<br>\"ஈன்ற பொழுதிலும் பெரிதுவக்கும் தன் மகனைச் சான்றோன் என கேட்ட தாய்\"  <br>As parents, we are really proud of you. Niraya children adam, sandithanam pannuvanga. But you are very quite. Oru toys kuda broke pannathillai. என்னிடம் நீ கற்றுக்கொண்டதை விட உன்னிடம் நான் கற்றுக் கொண்டது அதிகம். எனக்கு கடவுள் கொடுத்த மிகப்பெரிய வரம் நீதான் செல்லம். HAPPY BIRTHDAY KANNU. 🎂🎂🍿🎂🎂<br><br/><a href=\"videos/amma.mp4\" target=\"_blank\">A Video Surprise is waiting here.</a>"
];
var imgArr = ['image', 'img/a.jpeg', 'img/b.jpeg', 'img/c.jpeg', 'img/d.jpeg', 'img/e.jpeg', 'img/f.jpeg', 'img/g.jpeg', 'img/h.jpeg', 'img/i.jpeg', 'img/j.jpeg', 'img/k.jpeg', 'img/l.jpeg','img/m.jpeg', 'img/n.jpeg','img/o.jpeg', 'img/p.jpeg','img/q.jpeg', 'img/r.jpeg','img/s.jpeg', 'img/t.jpeg', 'img/u.jpeg', 'img/v.jpeg', 'img/w.jpeg','img/x.jpeg', 'img/y.jpeg', 'img/z.jpeg', '', '','','img/periamma.jpeg','img/periappa.jpeg','img/appa.jpeg','img/amma.jpeg'];

function unlock()
{
    var ele = document.querySelectorAll('.fa-lock','.fnt');
    console.log(ele);
   for (var i = 0; i < ele.length; i++ ) {
    ele[i].className= "fa fa-unlock-alt fnt";
       
        
    }
    
}
function numset(b) {
    a = b;
    var d = b * 20;
    //onclick of the lock
console.log(a);
    document.getElementById("modnam").innerHTML = "Guess Who..";
    if (a != 9&&a!=13) {
        document.getElementById("hint").innerHTML = hintArr[a];
        document.getElementById("hintimg").style.display = 'none';
    } else {
        document.getElementById("hint").innerHTML = '';
        document.getElementById("hintimg").style.display = 'block';
        document.getElementById("hintimg").src = hintArr[a];
    }
    var li = document.getElementById(d);
    document.getElementById("hid").style.display = "none";


    if (li.className == "fa fa-unlock-alt fnt") {
        document.getElementById("log").style.display = "none";
        document.getElementById("hid").style.display = "block";
        document.getElementById("txt").innerHTML = txtArr[a];
        document.getElementById("im").src = imgArr[a];
    } else {
        document.getElementById("log").style.display = "inline";

    }
}
console.log(checkPath.getTotalLength());
submitButton.addEventListener('click', e => {

    e.preventDefault();
    if (form.dataset.state != "typing") {
        TweenMax.to(close, 0.5, {
            opacity: 0,
            rotation: 0
        });

        TweenMax.fromTo(check, 0.5, {
            rotation: 360 * 3
        }, {
            rotation: 0
        });

        TweenMax.to(checkPath, 0.5, {
            strokeDashoffset: 175
        });

        form.dataset.state = "typing";
        TweenMax.fromTo(arrow, 0.45, {
            rotation: 0,
            x: '-60px',
            opacity: '0'
        }, {
            rotation: 0,
            x: '0',
            opacity: '1'
        });

        return;
    }

    TweenMax.to(arrow, 1, {
        rotation: 360 * 5,
        transformOrigin: "50% 50%",
        opacity: 0
    });


    setTimeout(() => {
        if (input.value != numArr[a]) {
            form.dataset.state = "error";
            TweenMax.to(close, 0.5, {
                rotation: 360 * 3,
                opacity: 1
            });

        } else {
            form.dataset.state = "success";
            TweenMax.to(checkPath, 0.65, {
                strokeDashoffset: 0
            });
            TweenMax.to(close, 0.5, {
                opacity: 0,
                rotation: 0
            });

            TweenMax.fromTo(check, 0.5, {
                rotation: 360 * 3
            }, {
                rotation: 0
            });

            TweenMax.to(checkPath, 0.5, {
                strokeDashoffset: 175
            });
            form.dataset.state = "typing";
            TweenMax.fromTo(arrow, 0.45, {
                rotation: 0,
                x: '-60px',
                opacity: '0'
            }, {
                rotation: 0,
                x: '0',
                opacity: '1'
            });
            document.getElementById("modnam").innerHTML = namArr[a];
            document.getElementById("log").style.display = "none";
            document.getElementById("hid").style.display = "block";
            document.getElementById("txt").innerHTML = txtArr[a];
            document.getElementById("im").src = imgArr[a];

            var c = a * 20;
            document.getElementById(c).className = "fa fa-unlock-alt fnt";

        }
    }, 500);
});
