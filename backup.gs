function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function MoveFolders(){



var files = DriveApp.getFolderById("folder_id").getFolders();
  while (files.hasNext()) {
    var file = files.next();
    var place = file.getName();
    var place = place.charAt(0) + place.charAt(1) + place.charAt(2);
    if (place == "SPL"){
      
      var dest = "folder_id";
    }

    if (place == "SRJ"){
      var dest = "folder_id";
    }

    if ((place) == "SES"){
      var dest = "folder id";
    }

    if ((place) == "SJC"){
      var dest = "folder id";
    }

    if ((place) == "SMA"){
      var dest = "folder id";
    }

    
    var destination = DriveApp.getFolderById(dest);
    file.moveTo(destination);
    var pull = DriveApp.getFolderById("folder id");
    pull.removeFolder(file);
  
  }
}

function GetProjects(){ //colocar como parametro o folder id para depois referenciar uma variavel a cada pasta no programa principal

let projects = [];
var folder = DriveApp.getFolderById(folder id).getFolders();
while (folder.hasNext()){
  var arq = folder.next();
  projects.push(arq);
}
return projects;
}

function CheckElements(project, projects){
let x = 0;
for (let i =0; i<projects.length; i++){
  if (project == projects[i]){
    x = 1;
  }
}
return x;
}

function MainTest(){
  let projects = GetProjects();
  let projeto = "SMA.00410.000190.3.0 - Alberto da Silva Andrade Restaurante";
  var teste = CheckElements(projeto, projects);
  Logger.log(teste);


}
