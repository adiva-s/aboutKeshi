
// variables
var img, keshiName;
var scenesInstance;
var xpos = 0;
var albumButton, homeButton, artistButton;
var titles = ["GABRIEL", "the reaper", "always"];
var albumCovers = ["gabriel.jpg", "thereaper.png", "always.png"];
var albumObjs = [];
var yPos = 0;
var state = "home"; // current scene will always be the home page

// GABRIEL ALBUM PAGE VARS
var gabrielRandomSongTitle;
var gabrielCurrentLyrics = [];
var gabrielSongTitles = ["LIMBO", "WESTSIDE", "ANGOSTURA", "SOMEBODY"];
let gabrielCurrentSongTitle = "";

// LIMBO Lyrics
var limboLyrics = [
  "Ooh",
  "Ooh-ooh-ooh-ooh",
  "Ooh-ooh-ooh-ooh, ooh",
  "Ooh-ooh, ooh",
  "Ooh-ooh-ooh-ooh, ooh",
  "Ooh-ooh, ooh",
  "I just been goin' through motions,back and forth like a ocean",
  "I am a fraud, I am the shit, hoping that nobody notice",
  "Bang chest in the morning, head down in the night",
  "Drink less if I wanted, strike up with the light",
  "And square up, I’m the mightest",
  "Myself in the fight, hurt twice but I tried it",
  "No advice for this shit, might die for this shit",
  "Do I feel alive, feel alive, feel alive?",
  "Feel more like limbo, hands out my window",
  "Chasin' that sunset, that's more my tempo",
  "Yeah, that’s more my tempo",
  "Ooh, but this is all that I am",
  "I only show you the best of me",
  "The best of me",
  "Looked in my demons and saw myself",
  "Put all my meanin' in someone else",
  "Outta sight, outta mind, dont know where to find it",
  "Don't know where to hide, but I still",
  "Eat good, drink good, feel good, sall good",
  "Can't hear my head when I'm sat beside ya",
  "Fucked lungs and a liver, good looks in the mirror",
  "Do I feel alive, feel alive, feel alive?",
  "Feel more like limbo, hands out my window",
  "Chasin' that sunset, that’s more my tempo",
  "That’s more my tempo",
  "Ooh, but this is all that I am",
  "I only show you the best of me",
  "The best of me",
  "Ooh, tryin' but I’m just a man",
  "Hopin' it won't get the best of me",
  "The best of me",
];

// WESTSIDE LYRICS
var westsideLyrics = [
  "Just don't let me go",
  "Swear you'll keep me close",
  "When I'm flying to the westside",
  "When I catch another redeye",
  "Just don't let me go",
  "Swear you'll keep me close",
  "When I'm flying to the westside",
  "When I catch another redeye",
  "You need to weigh your options",
  "All you do is talk about",
  "The dream or what you call it",
  "Is it everything you wanted?",
  "Is it big enough for the two of us?",
  "What's a couple more, maybe two of us?",
  "Am I big enough for the two of us?",
  "Is it room enough, is it room еnough?",
  "But I can't stop time, I tried to",
  "It just goes past and I can't seem to catch it",
  "No, I can't seem, no, I can't",
  "And I can't slow down, I triеd to",
  "I move too fast and I just end up crashin",
  "Na, na, na, na",
  "Just don't let me go",
  "Swear you'll keep me close",
  "When I'm flying to the westside",
  "When I catch another redeye",
  "Just don't let me go",
  "Swear you'll keep me close",
  "When I'm flying to the westside",
  "When I catch another redeye (Yeah, yeah, yeah)",
  "So where the fuck you been?",
  "And where you think you goin'?",
  "Is leaving you a sin or not?",
  "Am I better never knowing?",
  "Where the fuck is home? Where the fuck I'm goin'?",
  "Where the fuck my friends? Fuck I'm waiting for?",
  "Think it's time to go, think it's time to call you",
  "Think it's time to go, think it's time to call you",
  "But I can't stop time, I tried to",
  "It just goes past and I can't seem to catch it",
  "No, I can't seem, no, I can't",
  "And I can't slow down, I tried to",
  "I move too fast and I just end up crashin'",
  "Na, na, na, na",
  "Just don't let me go",
  "Swear you'll keep me close",
  "When I'm flying to the westside",
  "When I catch another redeye",
  "Just don't let me go",
  "Swear you'll keep me close",
  "When I'm flying to the westside",
  "When I catch another redeye",
];

// ANGOSTURA LYRICS
var angosturaLyrics = [
  "Babe, I can't lie, you been on my mind again",
  "Go 'round one more time, yeah, we can do things you like",
  "You don't need a reason for it",
  "Tell me what you need, make it easy for ya",
  "All of this talk ain't enough",
  "Are you down to see me or what?",
  "When you come through, you know I got you",
  "Babe, I got you",
  "So tell me when you roll through the H",
  "Goddamn, girl, you look amazin'",
  "Babe, we can drink it all away",
  "What you say, what you say, what you s–",
  "Pour me up another, let it go, I (Oh-oh-oh)",
  "Kick it with my brothers and it's alright (Oh)",
  "I just want a lover for the whole night, yeah",
  "Whole night, yeah, whole night",
  "Pour me up another, let it go, I (Oh-oh-oh)",
  "Kick it with my brothers and it’s alright (Oh)",
  "I just want a lover for thе whole night",
  "For the whole night, yеah, whole night",
  "Body get hot like sauna",
  "Ice on the wrist, big comma",
  "Baby girl, come bring it back, back, back",
  "You can take all the time you wanna",
  "'Cause I ain't in a rush to meet ya",
  "Small talk never meant much to me, nah",
  "We're face to face with it, love",
  "Go waist to waist with it, ya",
  "When you come through, you know I got you",
  "Babe, I got you",
  "So tell me when you roll through the H",
  "Goddamn, girl, you look amazin'",
  "Babe, we can drink it all away",
  "What you say, what you say, what you say?",
  "(Pour me up another, let it go, I, oh-oh-oh)",
  "Kick it with my brothers and it’s alright (Oh)",
  "I just want a lover for the whole night, yeah",
  "Whole night, yeah, whole night",
  "Pour me up another, let it go, I (Oh-oh-oh)",
  "Kick it with my brothers and it’s alright (Oh)",
  "I just want a lover for the whole night",
  "(For the whole, for the whole night, yeah)",
  "For the whole night, yeah, whole night",
];

// // SOMEBODY LYRICS
var somebodyLyrics = [
  "Baby, why the hesitation?",
  "'Cause I know that you can feel it too",
  "You want more and I can taste it",
  "Let me show you what I wanna do",
  "Tryna get trapped in your leg lock",
  "Go another round, make the bed rock",
  "Yuh, bite the neck, I'ma make it sweat",
  "Never give you no rest, never give you no rest",
  "You needed somebody, baby, put it on me",
  "I can be that body, said I can be that body",
  "You needed somebody, baby, put it on me",
  "I can be that body, said I can be that, no",
  "Baby, it’s you, baby, it’s you",
  "(Fuck around, put you down, get it loud, 'nother round)",
  "Baby, it’s you",
  "(You needed somebody, baby, put it on me)",
  "Tell me where you want, te—tell me where you want it",
  "Baby, it’s you, baby, it’s you",
  "(Fuck around, put you down, get it loud, 'nother round)",
  "Baby, it’s you",
  "(You needed somebody, baby, put it on me)",
  "Tell me where you want, te—tell me where you want it",
  "Back it up, girl, now you speakin' my language",
  "Show me your favorite spots, but you don’t gotta say it",
  "(Pull me close, hold it tight, let me go through the night)",
  "Saddle up girl, why you keepin' me waitin'?",
  "Hold on if you wanna get off",
  "If you want love, we gon' make it",
  "(Love, we gon' make— lo—lo—love, we gon' make i—it)",
  "You needed somebody, baby, put it on me",
  "I can be that body, said I can be that body",
  "You needed somebody, baby, put it on me",
  "I can be that body, said I can be that, no",
  "Baby, it’s you, baby, it’s you",
  "(Fuck around, put you down, get it loud, 'nother round)",
  "Baby, it’s you",
  "(You needed somebody, baby, put it on me)",
  "Tell me where you want, te—tell me where you want it",
  "Baby, it’s you (keshi), baby, it’s you",
  "(Fuck around, put you down, get it loud, 'nother round)",
  "Baby, it’s you",
  "(You needed somebody, baby, put it on me)",
  "Tell me where you want, te—tell me where you want it",
  "Pull me close",
  "Pull me close",
  "Hold it tight",
  "Pull me—pull me close",
  "Pull me close",
  "Pull me close",
  "Hold it tight",
  "Pull me—pull me close",
];

// THE REAPER ALBUM PAGE VARS
var thereaperRandomSongTitle;
var thereaperCurrentLyrics = [];
var thereaperSongTitles = [
  "the reaper",
  "like i need u",
  "2 soon",
  "i swear i’ll never leave again",
];
var thereaperCurrentSongTitle = "";

// the reaper Lyrics
var thereaperLyrics = [
  "(Oh, oh, oh)",
  "(Oh, oh, oh)",
  "I'm fallin' in deeper",
  "She’s callin' my keeper",
  "I wanted the reaper",
  "Will end it, just let me go",
  "No",
  "But something brings me back to you",
  "She wouldn't tell me why",
  "It's time to say goodbye",
  "What did you do, what did you do?",
  "Baby, just tell me lies",
  "We runnin' out of time (Yuh)",
  "Say that she can't decide (No)",
  "It's up to you, it's up to you",
  "We gonna live or die?",
  "Lay me to rest in peace, yuh",
  "Don't want your honesty, yuh",
  "I wanna see you when",
  "You're lying right here next to me",
  "She don't want me, but I burn inside",
  "She don't wanna keep this heart of mine",
  "She don't wanna leave just one time",
  "But when I fall asleep, give me cyanide",
  "I'm fallin' in deeper",
  "She’s callin' my keeper",
  "I wanted the reaper",
  "Will end it, just let me go",
  "No",
  "But something brings me back to you",
  "Love me, let me know",
  "Stay or should I go?",
  "Know that she was never mine to hold",
  "Reaping what I sow",
  "Taking what I owe",
  "When she come to take another soul",
  "I'm fallin' in deeper",
  "She’s callin' my keeper",
  "I wanted the reaper",
  "Will end it, just let me go",
  "No",
  "But something brings me back to you",
  "I'm fallin' in deeper",
  "She’s callin' my keeper",
  "I wanted the reaper",
  "Will end it, just let me go",
  "No",
  "But something brings me back to you",
];

// like i need u Lyrics
var likeineeduLyrics = [
  "Baby, I call in the dead of night",
  "But you don't need me like I need you",
  "Pray that I won't be alone",
  "Baby, I call in the dead of night",
  "But you don't need me like I need you",
  "Pray that I won't be alone",
  "Layin' on the bed waitin' for your text (Be alone)",
  "Babe, there's nothin' left",
  "Faded, I'm a wreck (Be alone)",
  "Afraid what's comin' next",
  "Wished we never met (Be alone)",
  "Layin' us to rest but baby, I beg you (Be alone)",
  "Too soon with a drunk call",
  "In the middle of the night",
  "You took it, my fault (Be alone)",
  "Didn't really mean to interrupt (Be alone)",
  "But if you change your mind, then hit me up (Be alone)",
  "Pain, that's an option",
  "No time for nonsense",
  "Can't ask you nothing",
  "Drank, feeling nauseous",
  "Too many toxins, not even conscious",
  "Say nothin' more, say nothin' more, baby",
  "Pain, that's an option",
  "No time for nonsense",
  "Can't ask you nothing",
  "Drank, feeling nauseous",
  "Too many toxins, not even conscious",
  "Say nothin' more, say nothin' more, baby",
  "We're better on our own",
  "Tonight, I'm gettin' throwed (You don't need me)",
  "She never comin' home",
  "Stay with me (Pray that I won't be alone)",
  "Say you'll leave (You don't need me)",
  "(Be alone, yeah-eah-eah-eah)",
  "Pain, that's an option",
  "No time for nonsense",
  "Can't ask you nothing",
  "Drank, feeling nauseous",
  "Too many toxins, not even conscious",
  "Say nothin' more, say nothin' more, baby",
  "Pain, that's an option",
  "No time for nonsense",
  "Can't ask you nothing",
  "Drank, feeling nauseous",
  "Too many toxins, not even conscious",
  "Say nothin' more, say nothin' more, baby",
  "Baby girl is sayin' that we just friends",
  "That we just friends, uh",
  "If we fuckin', are we just friends?",
  "Are we just friends? No",
];

// 2 soon Lyrics
var twosoonLyrics = [
  "Drank too much, got the sickness",
  "Pray to God and his son for forgiveness",
  "Same crew but another mistress",
  "Every day, every night getting wasted",
  "But I miss you, what did I do?",
  "Fuck it up, laugh it off and I lost you",
  "If I pull through, is it too soon?",
  "Turn it up, close my eyes and I'm with you",
  "Yo, Marvin, stop calling",
  "Sad Iverson is ballin'",
  "In the corner of a room by himself",
  "You are nothin' but an empty shell",
  "Every night, he goin' down to hell",
  "Fake love in a shit hotel",
  "Can't believe how far he fell",
  "You weak on the floor, so you call her cell",
  "How you been? How you doing?",
  "You been good? I been drinking",
  "Way too much, you'd think that I'd be over you",
  "Over you, over you",
  "(Eight calls, all you)",
  "But I think about it every day, yeah",
  "Yeah, I never missed her anyways",
  "Yeah, I never missed her anyways (Yeah-eah-eah)",
  "Drank too much, got the sickness",
  "Pray to God and his son for forgiveness",
  "Same crew but another mistress",
  "Every day, every night getting wasted",
  "But I miss you, what did I do?",
  "Fuck it up, laugh it off and I lost you",
  "If I pull through, is it too soon?",
  "Turn it up, close my eyes and I'm with you",
  "Call me up",
  "Stay over and we'll call it love",
  "Don't matter if it fucks me up",
  "The alcohol is not enough (Ooh, yeah)",
  "Fuck pride and the other guy",
  "I cried, I don't 'member why",
  "Tonight, I'ma try to hide",
  "No slide, get frostbite",
  "Eight calls, all you, 8 ball, all you",
  "Yeah, I never missed her anyways",
  "Yeah, I never missed her anyways",
  "Drank too much, got the sickness",
  "Pray to God and his son for forgiveness (Yeah-eah-eah-eah-yeah)",
  "Same crew but another mistress",
  "Every day, every night getting wasted (Ooh-ohh, ooh)",
  "But I miss you, what did I do?",
  "Fuck it up, laugh it off and I lost you (Yeah-eah)",
  "If I pull through, is it too soon?",
  "Turn it up, close my eyes and I'm with you (Yeah-eah-eah)",
  "Drank too much, got the sickness",
  "Pray to God and his son for forgiveness",
  "Same crew but another mistress",
  "Every day, every night getting wasted (Yeah, yeah, yeah, too)",
  "But I miss you, what did I do?",
  "Fuck it up, laugh it off and I lost you (Hea-hea-hea)",
  "If I pull through, is it too soon?",
  "Turn it up, close my eyes and I'm with you",
];

// i swear i'll never leave you again
var neverleaveyouagainLyrics = [
  "I swear I'll never leave again",
  "Mirror on the wall, can you tell me who I am?",
  "I think that I forgot, so remind me once again",
  "Maybe I was going too fast",
  "Babe, I’d give it all to go back (Yeah-ea-eah)",
  "Baby, I'm better, I promise",
  "Know that I've never been honest",
  "Maybe I never forgot it (Forgot it)",
  "Daily reminder, tattoos of tigers",
  "Cigarette lighters, laughter and cider",
  "(Daily reminder, tattoos of tigers",
  "Cigarette lighters, laughter and cider)",
  "Ohh (Ohh)",
  "Ohh (Yeah)",
  "(Yeah-yeah-yeah)",
  "I don't deserve this, all in your arms",
  "All your forgiveness, I don't belong",
  "I swear, I swear I'll never leave again",
  "(Daily reminder, tattoos of tigers",
  "Cigarette lighters, laughter and cider",
  "Maybe I was going too fast",
  "Babe, I’d give it all to go back)",
  "So this is love?",
  "Just hold me close, I’ll never leave",
  "I won’t let go",
  "Ohh, I swear I'll never leave again",
];

// ALWAYS ALBUM PAGE VARS
var alwaysRandomSongTitle;
var alwaysCurrentLyrics = [];
var alwaysSongTitles = ["always", "more", "drunk", "talk", "BYS", "us"];
var alwaysCurrentSongTitle = " ";

// always lyrics
var alwaysLyrics = [
  "One, two, one, two, three",
  "Lend me your ears",
  "Hey, where'd you go?",
  "Could've sworn that you were sleepin' over",
  "Say, I don't know",
  "But I thought that we were starting over",
  "Like we always do",
  "Like we always do",
  "Was I a fool?",
  "To think that we always would",
  "(Yes or no? This is your last chance, no beating around the bush)",
  "Gone, not a trace",
  "And it's almost like it never happened",
  "No, not the same",
  "Guess it hurt me more than I imagined",
  "We always do",
  "Like we always do",
  "Was I a fool?",
  "To think that we always would",
  "Like we always do",
  "Like we always do",
  "Was I a fool?",
  "To think that we always would",
];

// more lyrics
var moreLyrics = [
  "Said she want more, I'm not enough",
  "Gettin' low and I think I'm givin' up",
  "Baby, come home, I want us",
  "I want us, said I want us",
  "Said she want more, I'm not enough",
  "Gettin' low and I think I'm givin' up",
  "Baby, come home, I want us",
  "I want us, said I want us",
  "Said I gotta get money, swear I still love you",
  "I don't wanna go, but you know that I have to",
  "Touch road, gotta play shows",
  "Crowd go wild for the shit I wrote",
  "But this shit so-so, lose control",
  "Gotta change up everything I know",
  "Better, run ways when you smell that smoke",
  "Better, hold me when my head gon' blow like",
  "Hasta la vista, dyin' to see ya",
  "In a dream that I had where I sing in arenas",
  "Hasta la vista, dyin' to see ya, baby",
  "It ain't so bad when there's nothin' between us",
  "Said she want more, I'm not enough",
  "Gettin' low and I think I'm givin' up",
  "Baby, come home, I want us",
  "I want us, said I want us",
  "Said she want more, I'm not enough",
  "Gettin' low and I think I'm givin' up",
  "Baby, come home, I want us",
  "I want us, said I want us",
  "Gone so fast, all the bad habits",
  "Not gon' last, better run back, kid",
  "Just so sad, worse than last year",
  "Just might crash, just might crash",
  "Just might",
  "Everybody left except for you and I",
  "She don't want stories and lullabies",
  "She don't understand that it's do or die",
  "Said I can buy it all, but it's all a lie",
  "No trade for the things I lost",
  "No train for the boy that stopped",
  "Run ways into these arms of mine",
  "No trade for the things I lost",
  "No train for the boy that stopped",
  "Run ways into these arms of mine",
  "Said she want more, I'm not enough",
  "Gettin' low and I think I'm givin' up",
  "Baby, come home, I want us (Yeah-eah, yeah, ooh-ooh-ooh)",
  "I want us, said I want us",
  "Said she want more, I'm not enough",
  "(Like hasta la vista)",
  "Gettin' low and I think I'm givin' up (Yeah-yeah-yeah, -eah)",
  "(Dyin' to see ya)",
  "Baby, come home, I want us",
  "(In a dream that I had)",
  "I want us, said I want us",
  "(Where I sing in arenas)",
  "Said she want more, I'm not enough",
  "(Like hasta la vista)",
  "Gettin' low and I think I'm givin' up (Yeah-yeah-yeah, -eah)",
  "(Dyin' to see ya)",
  "Baby, come home, I want us",
  "(In a dream that I had)",
  "I want us, said I want us",
];

// drunk lyrics
var drunkLyrics = [
  "All my friends are drunk again",
  "And I'm stumblin' back to bed all by myself",
  "Don't need nobody else",
  "All my friends are drunk again",
  "And I'm stumblin' back to bed all by myself",
  "Don't need nobody else",
  "Smell like smoke, Nuit De L'Homme",
  "It's been a while since we last spoke",
  "So tell me, how's it go?",
  "Still love blues, nothin' new",
  "Careless love, I've had a few",
  "How 'bout you?",
  "All my friends are drunk again",
  "And I'm stumblin' back to bed all by myself",
  "Don't need nobody else",
  "All my friends are drunk again",
  "And I'm stumblin' back to bed all by myself",
  "Don't need nobody else",
  "I never thought when you're gone",
  "I'd find it hard to carry on",
  "And it's probably 'cause",
  "I fell in love way back then",
  "And I think about us when",
  "I think about us when",
  "All my friends are drunk again",
  "And I'm stumblin' back to bed all by myself",
  "Don't need nobody else",
  "All my friends are drunk again",
  "And I'm stumblin' back to bed all by myself",
  "I got, I got nobody else",
  "Ooh-ooh, ooh-ooh, ooh-ooh, no-no",
  "Ooh, ooh, ooh-ooh, ooh",
];

// talk lyrics
var talkLyrics = [
  "Baby, I",
  "Can't decide, I",
  "Need your guidance, ooh",
  "Ooh, ooh",
  "Ooh, ooh",
  "I got nobody left to lose",
  "When I fall, I turn to you",
  "And the world just got confusin'",
  "And I think you need me too",
  "You want a night out, fucked up, don't know where to find ya",
  "Drive so fast and we runnin red lights—igh—igh",
  "Night out, fucked up, don't know where to find ya",
  "Shit won't last, but I wanna make right",
  "So can we talk for a minute, talk for a minute?",
  "So can we talk for a minute, talk for a minute?",
  "Maybe we don't talk enough, talk (Baby, I)",
  "Maybe we don't talk enough, talk enough (Can't decide, I)",
  "Maybe we don't talk enough, talk enough (Need your guidance)",
  "Maybe we don't talk like we used to",
  "Like we— like we used to",
  "Talk enough, talk enough",
  "Maybe we don't talk enough, talk enough",
  "Maybe we don't talk enough, talk enough",
  "Maybe we don't talk like we used to",
  "Like we— like we used to",
  "She got me runnin' 'round town, I surrender all of me",
  "Oh my God, I'll give you anything you want",
  "Maybe I forgot why you left in the first place",
  "Way too many friends gettin' close on yo'—",
  "Got me runnin' 'round town, I surrender all of me",
  "(Got nobody left to lose)",
  "Oh my God, I'll give you anything you want",
  "(When I fall, I turn to you)",
  "Maybe I forgot why you left in the first place",
  "(And the world just got confusin')",
  "Way too many friends gettin' close on yo' birthday",
  "(And I think you need me too)",
  "So can we talk for a minute, talk for a minute?",
  "So can we talk for a minute, talk for a minute?",
  "Maybe we don't talk enough, talk enough (Baby, I)",
  "Maybe we don't talk enough, talk enough (Can't decide, I)",
  "Maybe we don't talk enough, talk enough (Need your guidance)",
  "Maybe we don't talk like we used to",
  "Like we— like we used to",
  "Talk enough, talk enough",
  "Maybe we don't talk enough, talk enough",
  "Maybe we don't talk enough, talk enough",
  "Talk like we used to, like we— like we used to",
];

// BYS lyrics
var bysLyrics = [
  "Said you tired of the distance",
  "You tired of the fake love",
  "Say you don’t really miss him",
  "But I don’t really blame ya",
  "Don’t need nobody else",
  "Don’t need nobody help, mmm",
  "You get it on your own",
  "So why you beside yourself?",
  "So afraid to give and take your pain",
  "(Know better, but I pay no mind)",
  "(Get me inside ‘fore I go one time)",
  "So afraid to give your love away",
  "(Know better, but I pay no mind)",
  "(Get me inside ‘fore I go one time)",
  "You don’t gotta worry 'bout nothin'",
  "Baby girl, you know that I ain't leavin'",
  "Don’t cry, alright?",
  "Don’t cry, alright?",
  "Baby, go make yo' mind",
  "Baby, go make yo' mind, ahh",
  "Say it’s gon' take somе time",
  "Keep me 'round by your side, yеah (Uh)",
  "Say you wanna spend the night",
  "Then you all undecided (Ayy)",
  "Baby, go make yo' mind",
  "Baby, go make yo' mind",
  "You don't gotta wo— you don't gotta wo—",
  "Girl, you know that I— girl, you know that I—",
  "You don't gotta wo— you don't gotta wo—",
  "Girl, you know that I— girl, you know that I—",
  "Say you wanna talk til' the sunrise",
  "I don’t really mind if we stayin' up",
  "Say you got work, but it’s alright",
  "Hope I make you feel a little better (Oh)",
  "Singing you love songs",
  "Tell me I got you all wrong",
  "So you can run away",
  "So afraid to give and take your pain",
  "(Know better, but I pay no mind)",
  "(Pull me close, love me not)",
  "(When you're low, hit me up, babe)",
  "So afraid to give your love away",
  "(Know better, but I pay no mind)",
  "(Take your clothes, love me lots)",
  "(On my phone, hit me up, babe)",
  "You don’t gotta worry 'bout nothin'",
  "Baby girl, you know that I ain't leavin'",
  "Don’t cry, alright?",
  "Don’t cry, alright?",
  "Baby, go make yo' mind",
  "Baby, go make yo' mind, ahh (Ayy)",
  "Say it’s gon' take some time",
  "Keep me 'round by your side, yeah (Uh)",
  "Say you wanna spend the night",
  "Then you all undecided (Ayy)",
  "Baby, go make yo' mind",
  "Baby, go make yo' mind",
  "You don't gotta wo— you don't gotta wo—",
  "Girl, you know that I— girl, you know that I—",
  "You don't gotta wo— you don't gotta wo—",
  "Girl, you know that I— girl, you know that I—",
];

// us lyrics
var usLyrics = [
  "Tell me now",
  "Is that the sound",
  "Of all that we were building",
  "Crashin' down",
  "All around us and we never saw it comin'?",
  "Maybe we never make it through",
  "Say that you give another you",
  "Well I won't take it",
  "Or maybe I will",
  "'Cause you never know until you do",
  "If I had to guess, I think it's you",
  "So if I fake it",
  "Would it be true?",
  "Maybe we've been",
  "A little too caught up",
  "In things that don’t matter",
  "As much as we thought",
  "Maybe we've been",
  "A little too guarded",
  "From things that have hurt us",
  "A bit more than we thought",
  "Nothing more",
  "Than love and war",
  "But no onе knows the differencе",
  "All or none",
  "Call to tell me that I'm not the one you wanted",
  "Maybe we never make it through",
  "Say that you give another you",
  "Well I won’t take it",
  "Maybe I will",
  "'Cause you never know until you do",
  "If I had to guess, I think it's you",
  "So if I fake it",
  "Would it be true?",
  "Maybe we've been",
  "A little too caught up",
  "In things that don’t matter",
  "As much as we thought",
  "Maybe we've been",
  "A little too guarded",
  "From things that have hurt us",
  "A bit more than we thought",
  "Ups and downs",
  "Goin' steady when you're not around",
  "Go figure",
  "Tell me now",
  "Was that the sound of us?",
];


// CLASSES 
class Album {
  constructor(title, xpos, ypos, coverPath, height = 180, width = 180) {
    this.title = title;
    this.xpos = xpos;
    this.ypos = ypos;
    this.cover = loadImage(coverPath);
    this.width = width;
    this.height = height;
    this.xSpacing = 200; // Horizontal spacing between albums
    this.ySpacing = 150; // Vertical spacing between albums
  }

  display() {
    fill(255);
    image(this.cover, this.xpos + 35, this.ypos - 20, this.width, this.height);
    textSize(15);
    text(
      this.title,
      this.xpos + 10 + this.width / 2,
      this.ypos + this.height + 5
    );
  }

  isClicked() { // make sure album is being clicke
    return (
      mouseX >= this.xpos &&
      mouseX <= this.xpos + this.width &&
      mouseY >= this.ypos - 60 &&
      mouseY <= this.ypos - 60 + this.height
    );
  }
}

// class Scenes from - https://editor.p5js.org/melodyloveless/sketches/o8TB7CqqN
class Scenes {
  homePage() {
    image(img, 0, 0);
    keshiName.resize(300, 100);
    image(keshiName, xpos, height - 120);

    xpos += 1.5; // moving img
    if (xpos > width) {
      xpos = -105; // so it seems like its sliding into the frame
    }
  }
  albumPage() {
    background("#772124");
    keshiName.resize(300, 100);
    image(keshiName, xpos, height - 120);

    xpos += 1.5; // moving keshi image
    if (xpos > width) {
      xpos = 0; 
    }

    for (let i = 0; i < albumObjs.length; i++) {
      albumObjs[i].display(); // display albums
    }
  }
  artistPage() {
    image(img, 0, 0);
    keshiName.resize(300, 100);
    image(keshiName, 50, height - 120);

    fill(255);
    textSize(12);
    // from - https://en.wikipedia.org/wiki/Keshi_(singer)
    text(
      "Casey Thai Luong, known professionally\n\n as Keshi, is a Vietnamese American singer, \n\n songwriter, record producer, and \n\n multi-instrumentalist.\n", width - 250, 150);
    // from - https://www.allmusic.com/artist/keshi-mn0003732692#:~:text=Vocalist%2C%20instrumentalist%2C%20and%20songwriter%20Keshi,textural%20instrumentals%2C%20and%20booming%20drums.
    text(
      "\n ' Keshi builds his infectious tracks out of\n\n lo-fi hip-hop beats and ultra-chill R&B \n\n\t vocalizing. His songs are defined by \n\n\t\t distant falsetto vocals, delicate and  \n\n\t\t textural instrumentals, and booming \n\n\t\t\t drums. '", width - 240, 280);
    text("- Fred Thomas", width - 130, 470);
  }
  gabrielPage() {
    background("#772124");

    stroke(255);
    strokeWeight(3);
    rect(20, 130, 250, 250);
    gabrielCover.resize(250, 250);
    image(gabrielCover, 20, 130);
    noStroke();
    fill(255);
    textSize(20);
    text(gabrielRandomSongTitle, 25, height - 80);

    yPos += 1;
    if (yPos > height + gabrielCurrentLyrics.length) {
      yPos = -gabrielCurrentLyrics.length * 30;
    }
    displayLyrics(gabrielCurrentLyrics);
  }
  theReaperPage() {
    background("#772124");

    stroke(255);
    strokeWeight(3);
    rect(20, 130, 250, 250);
    theReaperCover.resize(250, 250);
    image(theReaperCover, 20, 130);
    noStroke();
    fill(255);
    textSize(20);
    text(thereaperRandomSongTitle, 25, height - 80);

    yPos += 1;
    if (yPos > height + thereaperCurrentLyrics.length * 1) {
      yPos = -thereaperCurrentLyrics.length * 30;
    }
    displayLyrics(thereaperCurrentLyrics);
  }
  alwaysPage() {
    background("#772124");

    stroke(0);
    strokeWeight(3);
    rect(20, 130, 250, 250);
    alwaysCover.resize(250, 250);
    image(alwaysCover, 20, 130);
    noStroke();
    fill(255);
    textSize(20);
    text(alwaysRandomSongTitle, 25, height - 80);

    yPos += 1;
    if (yPos > height + alwaysCurrentLyrics.length * 1) {
      yPos = -alwaysCurrentLyrics.length * 30;
    }
    displayLyrics(alwaysCurrentLyrics);
  }
}


function preload() {
  img = loadImage("keshi.jpg");
  keshiName = loadImage("keshiName.png");
  keshiName2 = loadImage("keshiName.png");
  gabrielCover = loadImage("gabriel.jpg");
  theReaperCover = loadImage("thereaper.png");
  alwaysCover = loadImage("always.png");
}

function setup() {
  createCanvas(700, 500);
  img.resize(700, 500);
  // music button
  albumButton = createButton("music");
  albumButton.style("background-color", "#FFFFFF");
  albumButton.style("color", "#99302F");
  albumButton.position(width - 110, 35);
  albumButton.style("padding", "5px");
  albumButton.style("font-size", "20px");
  albumButton.style("border-radius", "5px");
  albumButton.style("border", "1px solid #FFFFFF");
  albumButton.style("width", "80px");
  albumButton.style("height", "40px");
  albumButton.mousePressed(goToAlbumPage);

  // source  https://gist.github.com/lizzybrooks/54045563e4e8321718cc40297db999f9
  // home button
  homeButton = createImg("k.png", "");
  homeButton.position(20, 25);
  homeButton.style("width", "25px");
  homeButton.style("height", "25px");
  homeButton.mousePressed(goToHomePage);
  // artist button
  artistButton = createButton("artist");
  artistButton.style("background-color", "#FFFFFF");
  artistButton.style("color", "#99302F");
  artistButton.position(width - 220, 35);
  artistButton.style("padding", "5px");
  artistButton.style("font-size", "20px");
  artistButton.style("border-radius", "5px");
  artistButton.style("border", "1px solid #FFFFFF");
  artistButton.style("width", "80px");
  artistButton.style("height", "40px");
  artistButton.mousePressed(goToArtistPage);

  scenesInstance = new Scenes();
  displayAlbum();

  // conditional statements to get a random song for each album page everytime entering that page
  if (state === "gabriel") {
    gabrielRandomSongTitle = getRandomSongTitleGabriel();
    gabrielCurrentLyrics = getLyricsForSongGabriel(gabrielRandomSongTitle);
  }

  if (state === "thereaper") {
    thereaperRandomSongTitle = getRandomSongTitleReaper();
    thereaperCurrentLyrics = getLyricsForSongReaper(thereaperRandomSongTitle);
  }

  if (state === "always") {
    alwaysRandomSongTitle = getRandomSongTitleAlways();
    alwaysCurrentLyrics = getLyricsForSongAlways(alwaysRandomSongTitle);
  }
}

function draw() {
  if (state === "home") {
    scenesInstance.homePage();
  } else if (state === "album") {
    scenesInstance.albumPage();
  } else if (state === "artist") {
    scenesInstance.artistPage();
  } else if (state === "gabriel") {
    scenesInstance.gabrielPage();
  } else if (state === "theReaper") {
    scenesInstance.theReaperPage();
  } else if (state === "always") {
    scenesInstance.alwaysPage();
  }
}

function displayLyrics(lyrics) {
  for (let i = 0; i < lyrics.length; i++) {
    let y = yPos + i * 30;
    let x = width / 2 - 50;
    textSize(13);
    text(lyrics[i], x, y);
  }
}

function goToAlbumPage() {
  state = "album";
}

function goToHomePage() {
  state = "home";
}

function goToArtistPage() {
  state = "artist";
}

function displayAlbum() {
  let xPos = 30;
  let yPos = 170;

  for (let i = 0; i < titles.length; i++) {
    albumObjs.push(new Album(titles[i], xPos, yPos, albumCovers[i]));
    xPos += albumObjs[i].xSpacing; 
    if (xPos > width - 100) {
      xPos = 50;
      yPos += albumObjs[i].ySpacing;
    }
  }
}

// GABRIEL ALBUM FUNCTIONS
function getRandomSongTitleGabriel() {
  return random(gabrielSongTitles);
}
function getLyricsForSongGabriel(gabrielSongTitle) {
  if (gabrielSongTitle === "LIMBO") {
    return limboLyrics;
  } else if (gabrielSongTitle === "WESTSIDE") {
    return westsideLyrics;
  } else if (gabrielSongTitle === "ANGOSTURA") {
    return angosturaLyrics;
  } else if (gabrielSongTitle === "SOMEBODY") {
    return somebodyLyrics;
  }
}
function changeGabrielSong() {
  gabrielRandomSongTitle = getRandomSongTitleGabriel();
  gabrielCurrentLyrics = getLyricsForSongGabriel(gabrielRandomSongTitle);
}

// THE REAPER ALBUM FUNCTION
function getRandomSongTitleReaper() {
  return random(thereaperSongTitles);
}
function getLyricsForSongReaper(thereaperSongTitle) {
  if (thereaperSongTitle === "the reaper") {
    return thereaperLyrics;
  } else if (thereaperSongTitle === "like i need u") {
    return likeineeduLyrics;
  } else if (thereaperSongTitle === "2 soon") {
    return twosoonLyrics;
  } else if (thereaperSongTitle === "i swear i’ll never leave again") {
    return neverleaveyouagainLyrics;
  }
}
function changeReaperSong() {
  thereaperRandomSongTitle = getRandomSongTitleReaper();
  thereaperCurrentLyrics = getLyricsForSongReaper(thereaperRandomSongTitle);
}

// ALWAYS ALBUM FUNCTIONS
function getRandomSongTitleAlways() {
  return random(alwaysSongTitles);
}
function getLyricsForSongAlways(alwaysSongTitle) {
  if (alwaysSongTitle === "always") {
    return alwaysLyrics;
  } else if (alwaysSongTitle === "more") {
    return moreLyrics;
  } else if (alwaysSongTitle === "drunk") {
    return drunkLyrics;
  } else if (alwaysSongTitle === "talk") {
    return talkLyrics;
  } else if (alwaysSongTitle === "BYS") {
    return bysLyrics;
  } else if (alwaysSongTitle === "us") {
    return usLyrics;
  }
}
function changeAlwaysSong() {
  alwaysRandomSongTitle = getRandomSongTitleAlways();
  alwaysCurrentLyrics = getLyricsForSongAlways(alwaysRandomSongTitle);
}

function mousePressed() { 
  // when in album page and an album is clicked, a random song from the album is displayed
  if (state === "album") {
    for (let i = 0; i < albumObjs.length; i++) {
      if (albumObjs[i].isClicked()) {
        if (i === 0) {
          state = "gabriel";
          changeGabrielSong(); // another random song is displayed
        } else if (i === 1) {
          state = "theReaper";
          changeReaperSong(); // another random song is displayed
        } else if (i === 2) {
          state = "always"; // another random song is displayed
          changeAlwaysSong();
        }
      }
    }
  }
}




// all sources for images/lyrics in sources.txt
