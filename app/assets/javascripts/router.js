$(document).ready(function () {
	var routes = {
		"click_counter": clickCounter,
		"one_page": onePage,
		"make_a_dude": makeADude,
		"keep_it_up": keepItUpGame,
		"view_graph": viewGraph,
		"king_of_comments": kingOfComments,
		"pixshow": pixShow,
		"your_space": yourSpace,
		"hangman": hangmanGame,
		"pv_calculator": pvCalculator,
		"tiny_notes": tinyNotes,
		"capture": captureGame,
		"text_scroller": textScroller,
		"hollywood": hollywoodSign,
		"liquor_likes": liquorLikes,
		"fishy_friend": fishyFriend,
		"snare": snare,
		"quick_words": quickWords,
		"countdown": countdownClock,
		"hourglass": hourglass,
		"skinny_drinks": skinnyDrinks,
		"pinwheel": pinwheel,
		"typing_test": typingTest,
		"swivel": swivelGame,
		"mastermind": mastermindGame,
		"sparklers": sparklers,
		"postbored": postbored,
		"text_to_braille": textToBraille,
		"no_one_watching": noOneWatching,
		"tos": tos,
		"song_machine": songMachine,
		"globulator": globulator,
		"drying_paint": dryingPaint,
		"word_clock": wordClock,
		"emergency_off": emergencyOff,
		"infinite_descent": infiniteDescent,
		"wish": wish,
		"serious_question": seriousQuestion,
		"algae_tank": algaeTank,
		"colorworks": colorWorks,
		"effects": effects,
		"down_the_weight": downTheWeight,
		"check_sketch": checkSketch,
		"window_sizer": windowSizer,
		"image_palette": imagePalette,
		"splodin_bacon": splodinBacon,
		"glob_glob": globGlob,
		"forest": forest,
		"mishmosh": mishmosh,
		"todo": nothing,
		"button_maker": buttonMaker,
		"brick_smasher": brickSmasher,
		"balloon": balloon,
		"plinky": plinky,
		"screwdriver": screwdriver,
		"confused_twitter": confusedTwitter,
		"picnic": picnic,
		"share_a_secret": shareASecret,
		"here": herePage,
		"photobooth": photobooth,
		"cat_wall": catWall,
		"word_cloud": wordCloud,
		"sharks": sharks,
		"need_drink": needDrink,
		"signature": signature,
		"image_editor": imageEditor,
		"other_side": otherSide,
		"open_note": openNote,
		"more_drop_shadow": moreDropShadow,
		"elevation": elevationPage,
		"whats_my_ip": nothing,
		"must_write": mustWrite,
		"boom": boomPage,
		"color_picker": colorPickerPage,
		"tweet_time": tweetTime,
		"morse_coder": morseCoder,
		"ransom_note": ransomNote,
		"moment_of_peace": momentOfPeace,
		"pollsie": pollsie,
		"audio_recorder": audioRecorder,
		"salon": salonGalleries,
		"portrait": portraitPhotos
	};
	var route = window.location.pathname.replace(/^\//, '').replace(/\/.*/, '');
	routes[route]();
});