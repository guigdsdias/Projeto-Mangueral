/** 
 * @module 
 * @description
 * Biblioteca de funções utilitárias do SOS fora do framework AngularJS
 */

 'use strict';

 (function (Utils, window, undefined) {

 	'use strict';

 	Utils.objeto = { };

	Utils.obterElemento = function(nomeCampo,valor,lista){

		for (var i in lista){
			var e = lista[i];
			
			if (e[nomeCampo].toString() === valor.toString()){
				return e;
			}
		}

	};


 	Utils.removeElementosDuplicados = function (arr){

 		var arrRes = [];

    	  // remove duplicados
    	  arr.forEach(function(elem,j,lista){
    	  	arrRes[JSON.stringify(elem)] = elem;
    	  });
    	  
    	  // refaz as chaves do array
    	  var res = [];
    	  for (var i in arrRes){
    	  	res.push(arrRes[i]);
    	  }
    	  
    	  return res;
	};

    // remove elementos vazios de um array
    Utils.removeElementosVazios = function(lista){
    	for(var i=0; i<lista.length;i++){
    		if ((!lista[i]) || (lista[i]=="")) {
    			lista.splice(i,1);
    			i--;
    		}
    	}

    	return lista;
    };

	// para envio à url
	Utils.encodeUrl = function(msg){
		return encodeURIComponent(JSON.stringify(msg));
	}
	
	// Testa se uma variável possui conteúdo vazio
	Utils.eVazio = function(valor){
		var soma = 0;
		(new String(valor).split("")).forEach(function(e,i,a){
			soma+= e.charCodeAt(0);
		});
		
		return (!valor || valor==="" || !soma || valor==="undefined");
	};
	
	Utils.obterData = function(somaDias){
		
		if (!somaDias)
			somaDias = 0;
		
		var dt = new Date();
		dt.setDate(dt.getDate()+somaDias);
		return ('0'+dt.getDate()).substr(-2) + '/' + 
		('0'+(dt.getMonth()+1)).substr(-2) + '/' + 
		dt.getFullYear();
	};
	
	Utils.obterMesSeguinte = function(){
		var dt = new Date();
		var mes = dt.getMonth();

		// incrementa 31 dias à data corrente
		dt.setDate(dt.getDate()+31);

		// tratamento para quando o mês seguinte tiver menos 31 dias  
		mes = (dt.getMonth()-mes > 1) ? dt.getMonth() : dt.getMonth()+1 ;

		// retorno no formato "mm/yyyy"
		return ('0'+mes).substr(-2) + "/" + dt.getFullYear();		
	};
	
	// retorna timestamp no formado que o cobol utiliza: 2015-10-05-11.57.02.413655
	Utils.obterTimestampCobol = function(){
		var dt = new Date();

		var ano  = dt.toLocaleString().split(" ")[0].split("/");
		
		return	ano[2]+"-"+ano[1]+"-"+ano[0]+"-"+ 							// data
				dt.toLocaleString().split(" ")[1].split(":").join(".")+"."+ // hora
				("00"+(dt.getMilliseconds()+1)).substr(-3)+"000";			// milisegundos
			};

	/**
	 * Verifica se um dado qualquer é uma data
	 */
	 Utils.isDate = function(d){

	 	try {
	 		var data2 = ""

			// substitui . por /
			d = d.replace(/\./g, '/');

			data2 = d.split("/").join("");
			
			if (((data2.length == 8) || (data2.length == 6)) && (Date.parse(d)))
				return true;
			
		} catch (e) {
			return false;
		}

		return false;
	};
	
	/**
	 * Verifica se um dado qualquer é uma numero
	 */
	 Utils.isNumeric = function(n){
	 	if (!isNaN(n)){
	 		return true;
	 	} else {
	 		return (!isNaN(n.replace(".","").replace(",",".")));
	 	}
	 };

	 Utils.textoContem = function(str,find){
	 	return str.indexOf(find) >= 0;
	 };

	 Utils.formatoDePara = function(data, mascaraEntrada, mascaraSaida){
	 	if (!data) { return ''; }

	 	if (!mascaraEntrada){ return "[Informe a máscara de entrada]"; }
	 	if (!mascaraSaida){ return "[Informe a máscara de saída]"; }


		//var alerta = function(msg){return msg+" ---";};
		var removeMascara = function(str,expReg){
		    var arr = str.split(/(\W)/); // remove caracteres especiais
		    for (var i = 0; i<arr.length;i++){
		        if ((expReg.test(arr[i])) || (arr[i]=="")){ // remove os elementos vazios e os elementos validados pela expressão regular (expReg)
		            arr.splice(i,1); // remove o elemento do array;
		            i--;
		        }
		    }
		    return arr;
		};

		/////////////////////////////////////////////////////////////////////////////
		//////////////////////////// desmembrando ///////////////////////////////////
		/////////////////////////////////////////////////////////////////////////////
		
		// construção da expressão regular contendo os caracteres especiais da máscara
		var ch = mascaraEntrada.toString().trim().replace(/[a-zA-Z0-9]/g,'') // remove todos os caracteres alpha numéricos
		           .replace(/(\W)\1+/g, function (str, match) { return match[0]; }); // remove caracteres repetidos
		var objRegExp = new RegExp("[\\"+ch.split("").join(",\\")+"]","g");// expressão regular com os caracteres do formato de entrada (removidos os alphanuméricos)
		
		var arrMascaraEntrada = removeMascara(mascaraEntrada,objRegExp);
		
		var arrMascaraSaida = mascaraSaida.split(/[^a-zA-Z0-9]/g).join(ch); //remove os caracteres especiais e depois junta a string
		    arrMascaraSaida = removeMascara(arrMascaraSaida,objRegExp); //remove os espaços

		/////////////////////////////////////////////////////////////////////////////
		///////////////////////// construção da saída ///////////////////////////////
		/////////////////////////////////////////////////////////////////////////////
		
		// constrói um array (aux) com chaves do tipo "caracter"
		// objetivo: "casar" as chaves das máscaras de entrada com as de saída
		var aux = new Array();
		var arrData = Utils.removeElementosVazios(data.split(/[^0-9]/)); // 1º) quebra a data em partes separando por caracteres não numéricos | 2º) remove elementos vazios
		
		for (var i in arrMascaraEntrada){
		    aux[arrMascaraEntrada[i]] = arrData[i]; // aux possue chaves da
		}
		
		var res = mascaraSaida;
		for (var i in arrMascaraSaida){
			var el = arrMascaraSaida[i];
			
			if (!aux[el])
			{
				res = false;
				break; 
			}
			
			if (aux[el].length==1)
				aux[el] = ("0"+aux[el]).substr(-2,2); // preenche com zero à esquerda
			else
				aux[el] = aux[el];
			
			
			res = res.replace(el,aux[el]);
		}
		
		return (res) ? res : "[Máscara inválida]";
	};
	

}(window.Utils = window.Utils || {}, window));