

function change()
{
    var img1 = "https://cdn2.wanderlust.co.uk/media/2302/magazine-two-toed-baby-dreamstime_xl_25419161.jpg?width=460&slimmage=true",
        img2 = "https://www.animalfactsencyclopedia.com/images/xsloththreetoedfull.jpg.pagespeed.ic.5TAD1l_sxS.jpg";
    var imgElement = document.getElementById("imageSwap");

    imgElement.src = (imgElement.src === img1)?  img2 : img1;
}

function init() { fast_marquee.start(); }
	var rtl_marquee_Text = 'SLOTHS  SLOTHS  SLOTHS  SLOTHS  SLOTHS';
	var rtl_marquee_Direction = 'left';
	var rtl_marquee_Contents='<span style="font-family:Comic Sans MS;font-size:20pt;white-space:nowrap;">' + rtl_marquee_Text + '</span>';
	fast_marquee = new xbMarquee('fast_marquee', '29px', '90%', 6, 20, rtl_marquee_Direction, 'scroll', rtl_marquee_Contents);
	window.setTimeout( init, 200);
