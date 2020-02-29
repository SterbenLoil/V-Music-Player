$(function()
{
	var songs = [
     {
		artist: "Andiez",
		name: "1 Phút",
		url: "./Music/(18).mp3",
		picture: "./bg.jpg"
	},
    {
		artist: "Pháo x Masew",
		name: "2 Phút Hơn",
		url: "./Music/(19).mp3",
		picture: "./bgbg.jpg"
    	},
    {
		artist: "BRay",
		name: "Yêu Như Trẻ Con",
		url: "./Music/(17).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "B Ray x AMEE x Masew",
		name: "Do For Love",
		url: "./Music/(30).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "ĐạtG x DuUyên",
		name: "Bánh Mì Không",
		url: "./Music/(20).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "B ray x ĐạtG ft Masew x K-ICM",
		name: "Cao Ốc 20",
		url: "./Music/(22).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Emcee ft. Linh Cáo",
		name: "Chỉ Là Số Hai",
		url: "./Music/(23).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Phan Mạnh Quỳnh",
		name: "Có Chàng Trai Viết Lên Cây",
		url: "./Music/(24).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Lou Hoàng",
		name: "Cảm Giác Lúc Ấy Sẽ Ra Sao",
		url: "./Music/(21).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Jack x K-ICM",
		name: "Em Gì Ơi",
		url: "./Music/(31).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "B Ray x Masew ft. AMEE",
		name: "Ex's Hate Me",
		url: "./Music/(32).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Nguyễn Trọng tài x San Ji x Double X",
		name: "HongKong1",
		url: "./Music/(34).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Đức Phúc",
		name: "Hơn Cả Yêu",
		url: "./Music/(33).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "ĐạtG x DuUyên",
		name: "Khó Vẽ Nụ Cười",
		url: "./Music/(35).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Lou Hoàng",
		name: "Là Bạn Không Thể Yêu",
		url: "./Music/(36).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Ngọt",
		name: "Lần Cuối Đi Bên Em Xót Xa Người Ơi",
		url: "./Music/(37).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Trúc Nhân",
		name: "Lớn Rồi Còn Khóc Nhè",
		url: "./Music/(39).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Kha",
		name: "Lời Yêu Ngây Dại",
		url: "./Music/(38).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Da LAB ft. Tóc Tiên",
		name: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
		url: "./Music/(1).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Charles Huỳnh",
		name: "Nắng Đã Làm Má Em Thêm Hồng",
		url: "./Music/(41).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Rhymastic",
		name: "Nến Và Hoa",
		url: "./Music/(2).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Rhymastic",
		name: "Ngọn Đuốc Đêm",
		url: "./Music/(3).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Obito - W/n Remix, Cover Duongg, Tien",
		name: "Simple Love",
		url: "./Music/(4).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Thịnh Suy",
		name: "Nghe Em",
		url: "./Music/(9).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Hà Anh Tuấn",
		name: "Tháng Tư Là Lời Nói Dối Của Em",
		url: "./Music/(7).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Thịnh Suy",
		name: "Một Đêm Say",
		url: "./Music/(8).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Ngô Kiến Huy (Masew Remix)",
		name: "Truyền Thái Y",
		url: "./Music/(10).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Trịnh Thăng Bình",
		name: "Tâm Sự Tuối 30",
		url: "./Music/(5).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Xesi x Masew x Nhatnguyen",
		name: "Túy Âm",
		url: "./Music/(13).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Will x Han Sara",
		name: "Tận Cùng Nỗi Nhớ",
		url: "./Music/(6).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Phan Mạnh Quỳnh",
		name: "Từ Đó",
		url: "./Music/(11).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Da LAB",
		name: "Từ Ngày Em Đến",
		url: "./Music/(12).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Việt",
		name: "Bông Hoa Chẳng Thuộc Về Ta",
		url: "./Music/(16).mp3",
		picture: "./bg.jpg"
   	},
    {
		artist: "Lou Hoàng",
		name: "Vì Yêu Anh Sẽ",
		url: "./Music/(14).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "MIN x Đen X Justatee",
		name: "Vì Yêu Cứ Đâm Đầu",
		url: "./Music/(15).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "nân. x Ngơ",
		name: "Tình Đắng Như Ly Cà Phê",
		url: "./Music/(40).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen",
		name: "Anh Đếch Cần Gì Nhiều Ngoài Em",
		url: "./Music/(25).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen ft. Phương Anh Đào",
		name: "Lối Nhỏ",
		url: "./Music/(27).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen ft. Biên",
		name: "Hai Triệu Năm",
		url: "./Music/(26).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen ft. Thành Đồng",
		name: "Một Triệu Like",
		url: "./Music/(28).mp3",
		picture: "./bg.jpg"
   	},

    {
		artist: "Đen ft. MIN",
		name: "Bài Này Chill Phết",
		url: "./Music/(29).mp3",
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
	songs = shuffle(songs);

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

