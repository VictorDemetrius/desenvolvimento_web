$(document).ready(function()
{   let fonte = 15
    $('#aumenta').click(function()
    {
        if(fonte < 28)
        {
            $('body').css({'font-size': ++fonte + 'px'})
        }
    })
    $('#diminui').click(function()
    {
        if(fonte > 15)
        {
            $('body').css({'font-size': --fonte + 'px'})
        }
    })
})