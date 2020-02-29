$(function()
{
	var songs = [
     {
		artist: "Andiez",
		name: "1 Phút",
		url: "./Music/1 Phút - Andiez.mp3",
		picture: "./bg.jpg"
	},
    {
		artist: "Pháo x Masew",
		name: "2 Phút Hơn",
		url: "./Music/2 Phút Hơn - Pháo x Masew.mp3",
		picture: "./bgbg.jpg"
    	},
    {
		artist: "BRay",
		name: "Yêu Như Trẻ Con",
		url: "./Music/B RAY YÊU NHƯ TRẺ CON Official MV.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "B Ray x AMEE x Masew",
		name: "Do For Love",
		url: "./Music/B RAY x AMEE x MASEW DO FOR LOVE Official MV.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "ĐạtG x DuUyên",
		name: "Bánh Mì Không",
		url: "./Music/Bánh Mì Không - ĐạtG x DuUyên OFFICIAL MV.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "B ray x ĐạtG ft Masew x K-ICM",
		name: "Cao Ốc 20",
		url: "./Music/Cao Ốc 20 B RAY x DatG (ft MASEW x K-ICM) MV OFFICIAL.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Emcee ft. Linh Cáo",
		name: "Chỉ Là Số Hai",
		url: "./Music/Chỉ Là Số Hai - Emcee L ft. Linh Cáo (Official Audio).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Phan Mạnh Quỳnh",
		name: "Có Chàng Trai Viết Lên Cây",
		url: "./Music/Có Chàng Trai Viết Lên Cây - Phan Mạnh Quỳnh MẮT BIẾC OST.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Lou Hoàng",
		name: "Cảm Giác Lúc Ấy Sẽ Ra Sao",
		url: "./Music/CẢM GIÁC LÚC ẤY SẼ RA SAO LOU HOÀNG OFFICIAL AUDIO.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Jack x K-ICM",
		name: "Em Gì Ơi",
		url: "./Music/EM GÌ ƠI K-ICM x JACK OFFICIAL MUSIC VIDEO.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "B Ray x Masew ft. AMEE",
		name: "Ex's Hate Me",
		url: "./Music/Ex's Hate Me - B Ray x Masew (Ft AMEE) Official MV.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Nguyễn Trọng tài x San Ji x Double X",
		name: "HongKong1",
		url: "./Music/HongKong1 OFFICIAL MV Nguyễn Trọng Tài x San Ji x Double X.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Đức Phúc",
		name: "Hơn Cả Yêu",
		url: "./Music/HƠN CẢ YÊU - ĐỨC PHÚC OFFICIAL MUSIC VIDEO.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "ĐạtG x DuUyên",
		name: "Khó Vẽ Nụ Cười",
		url: "./Music/Khó Vẽ Nụ Cười (Audio) - ĐạtG x DuUyên.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Lou Hoàng",
		name: "Là Bạn Không Thể Yêu",
		url: "./Music/LÀ BẠN KHÔNG THỂ YÊU LOU HOÀNG STAGE VERSION.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Ngọt",
		name: "Lần Cuối Đi Bên Em Xót Xa Người Ơi",
		url: "./Music/LẦN CUỐI (đi bên em xót xa người ơi).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Trúc Nhân",
		name: "Lớn Rồi Còn Khóc Nhè",
		url: "./Music/LỚN RỒI CÒN KHÓC NHÈ ( MV ) TRÚC NHÂN (#LRCKN).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Kha",
		name: "Lời Yêu Ngây Dại",
		url: "./Music/Lời Yêu Ngây Dại - Kha.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Da LAB ft. Tóc Tiên",
		name: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
		url: "./Music/Nước Mắt Em Lau Bằng Tình Yêu Mới - Da LAB ft. Tóc Tiên (Official MV).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Charles Huỳnh",
		name: "Nắng Đã Làm Má Em Thêm Hồng",
		url: "./Music/NẮNG ĐÃ LÀM MÁ EM THÊM HỒNG CHARLES HUYNH Acoustic「Lyric 」.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Rhymastic",
		name: "Nến Và Hoa",
		url: "./Music/Rhymastic - Nen Va Hoa (Official Audio).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Rhymastic",
		name: "Ngọn Đuốc Đêm",
		url: "./Music/Rhymastic - Ngọn Đuốc Đêm (Official Audio).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Obito - W/n Remix, Cover Duongg, Tien",
		name: "Simple Love",
		url: "./Music/Simple love - obito (W n Remix) , Cover Duongg , Tien.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Thịnh Suy",
		name: "Nghe Em",
		url: "./Music/THỊNH SUY - NGHE EM OFFICIAL MUSIC VIDEO.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Hà Anh Tuấn",
		name: "Tháng Tư Là Lời Nói Dối Của Em",
		url: "./Music/Tháng Tư Là Lời Nối Dối Của Em [Official Lyric Video] - Hà Anh Tuấn.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Thịnh Suy",
		name: "Một Đêm Say",
		url: "./Music/Thịnh Suy - MỘT ĐÊM SAY (X).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Ngô Kiến Huy (Masew Remix)",
		name: "Truyền Thái Y",
		url: "./Music/Truyền Thái Y - Ngô Kiến Huy ( Masew Remix ).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Trịnh Thăng Bình",
		name: "Tâm Sự Tuối 30",
		url: "./Music/TÂM SỰ TUỔI 30 TRỊNH THĂNG BÌNH OST ÔNG NGOẠI TUỔI 30.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Xesi x Masew x Nhatnguyen",
		name: "Túy Âm",
		url: "./Music/Túy Âm - Xesi x Masew x Nhatnguyen.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Will x Han Sara",
		name: "Tận Cùng Nỗi Nhớ",
		url: "./Music/Tận Cùng Nỗi Nhớ (TCNN) Will x Han Sara Official Music Video.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Phan Mạnh Quỳnh",
		name: "Từ Đó",
		url: "./Music/TỪ ĐÓ - PHAN MẠNH QUỲNH MẮT BIẾC OST.mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Da LAB",
		name: "Từ Ngày Em Đến",
		url: "./Music/Từ Ngày Em Đến - Da LAB (Official MV).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Việt",
		name: "Bông Hoa Chẳng Thuộc Về Ta",
		url: "./Music/Việt Bông Hoa Chẳng Thuộc Về Ta (Official Lyrics Video).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Lou Hoàng",
		name: "Vì Yêu Anh Sẽ",
		url: "./Music/VÌ YÊU ANH SẼ OFFICIAL MV LOU HOÀNG.mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "MIN x Đen X Justatee",
		name: "Vì Yêu Cứ Đâm Đầu",
		url: "./Music/VÌ YÊU CỨ ĐÂM ĐẦU (VYCĐĐ) MIN x ĐEN x JUSTATEE OFFICIAL MUSIC VIDEO (민).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "nân. x Ngơ",
		name: "Tình Đắng Như Ly Cà Phê",
		url: "./Music/nân. x Ngơ - tình đắng như ly cà phê (Lyric Video) tas release.mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen",
		name: "Anh Đếch Cần Gì Nhiều Ngoài Em",
		url: "./Music/Đen - Anh Đếch Cần Gì Nhiều Ngoài Em ft. Vũ., Thành Đồng (M V).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen ft. Phương Anh Đào",
		name: "Lối Nhỏ",
		url: "./Music/Đen - Lối Nhỏ ft. Phương Anh Đào (M V).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen ft. Biên",
		name: "Hai Triệu Năm",
		url: "./Music/Đen - hai triệu năm ft. Biên (m v).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen ft. Thành Đồng",
		name: "Một Triệu Like",
		url: "./Music/Đen - một triệu like ft. Thành Đồng (M V).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen ft. MIN",
		name: "Bài Này Chill Phết",
		url: "./Music/Đen ft. MIN - Bài Này Chill Phết (M V).mp3",
		picture: "./bg.jpg"
   	},

		
   ];
   	var playerTrack = $("#player-track");
	var bgArtwork = $('#bg-artwork');
	var bgArtworkUrl;
	var albumName = $('#album-name');
	var trackName = $('#track-name');
	var albumArt = $('#album-art'),
		sArea = $('#s-area'),
		seekBar = $('#seek-bar'),
		trackTime = $('#track-time'),
		insTime = $('#ins-time'),
		sHover = $('#s-hover'),
        playPauseButton = $("#play-pause-button"),
        playRepeatButton = $("#play-repeat"),
        openMenu = $('#play-menu'),
		i = playPauseButton.find('i'),
		tProgress = $('#current-time'),
		tTime = $('#track-length'),
		seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
		buffInterval = null, tFlag = false;
	
	var playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
	
	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	// songs = shuffle(songs);

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }

    // toggle repeat
    function playRepeat()
    {
        isRepeat = !isRepeat;
        audio.loop = isRepeat;
        toggleEnable(isRepeat, playRepeatButton);
    }

    function toggleEnable(condition, element)
    {
        if (condition)
            element.addClass('isEnabled');
        else
            element.removeClass('isEnabled');
    }
    
    function toggleMenu()
    {
        isOpen = !isOpen;
        toggleEnable(isOpen, openMenu);
    }

	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
			selectTrack(1);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag, index = null)
    {
        if (index === null) {
            if( flag == 0 || flag == 1 ) {
                ++currIndex;
            } else if (flag === -1) {
                --currIndex;
            }
        } else {
            currIndex = index;
        }

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');
			
			currAlbum = songs[currIndex].name;
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;

            audio.src = songs[currIndex].url;
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            $('#album-art img').prop('src', bgArtworkUrl);
            $('.song').removeClass('playingSong');
            $('#song' + currIndex).addClass('playingSong');
	    albumArt.find('img').attr('src', currArtwork);
			
	    bgArtwork.css({'background-image':'url('+currArtwork+')'});
        }
        else
        {
            if (currIndex < 0) {
                currIndex = songs.length - 1;
            } else if (currIndex > songs.length - 1) {
                currIndex = 0;
            }
            selectTrack(2);
        }
    }

    function initPlayer()
	{	
        audio = new Audio();
        addSongList();
		selectTrack(0);
		
		audio.loop = false;
        isRepeat = false;
        isOpen = false;

		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){
            selectTrack(-1);
        });
        playNextTrackButton.on('click',function(){
            selectTrack(1);
        });
        playRepeatButton.on('click', function(){
            playRepeat();
        });
        openMenu.on('click', function(){
            $("#list-song").fadeToggle(300);
            toggleMenu();
        });
    }
    
    function addSongList() {
        songs.forEach((song, index) => {
            const songTemplate = 
            `<div class="song" id="song${index}">
                <i class="fas fa-play"></i>
                <div class="info">
                    ${song.name} - ${song.artist}
                </div>
            </div>`

            $("#list-song").append(songTemplate);
            $('#song' + index).on('click', () => {
                selectTrack(0, index);
                playPause();
            });
        })
        
    }
    
	initPlayer();
});
