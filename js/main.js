$(function(){
    // equivalente ao load de nossa página
    
     // Nâo bloqueia fundo de tela e tbm não sai qdo apertar esc ou clicar fora
    $("#modal01").modal({backdrop:false, keyboard:false}); 
    
    // Abre janela com id modal01 logo no carregamento da pagina
    $("#modal01").modal("show"); 
    
     // Seta timeout para janela com id modal01 
    setTimeout(function(){
        $("#modal01").modal("hide"); 
    }, 3000);
    
     // Disparando tooltip (aula 28)
    $(".ttp").tooltip({
    animation:false,
        //delay:{show: 1000, hide: 5000},
        title: "Titulo Padrão",
        trigger: 'click'
    });
    
     // Disparando popover (aula 28)
    $(".ppv").popover({
        title: "Titulo do popover",
        trigger: 'hover focus'
    });
    
    $(".btnjs").button();
    
    $("#troca-estado").click(function(){
        var btn = $(this);
        btn.button("loading");
        
        setTimeout(function(){
            btn.button("reset");
        }, 3000);
    });
    
    
    
});