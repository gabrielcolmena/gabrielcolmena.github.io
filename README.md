## Setup para correr aplicaciones iOS de Kratos

#### Requerido
	
	XCode 9.0 or later 
	macOS Sierra 10.12.4 or later

#### Descargar el repositorio

	https://github.com/2WaySportsLLC/<AppName>

#### Instalar pods

	pod install

#### Correr aplicación

	cmd + R

###### Nota

_Para correr y probar las apps se recomienda utilizar un dispositivo físico mas sin embargo ocacionalmente será necesario hacer uso del emulador de xCode para probar features o issues en dispositivos específicos_




#### Manejo de git / issues / features:

Al iniciar el desarrollo de un nuevo feature o issue se debe comenzar con la actualización del repositorio local, respecto a la rama _develop_ en el repositorio remoto. Para esto se pueden ejecutar los siguientes comandos:

		git checkout develop
		git pull origin develop

Una vez hecho esto se procede a crear una nueva rama relacioada a la actividad a desarrollar

		git checkout -b <actividad>/<usuario_responsable>/<numero_de_ticket>

##### ejemplo:

		git checkout -b feature/gabriel/ticket-1

Una vez creada la rama, el usuario responsable será el único a cargo de esta
	
Al finalizar cada día esta rama debe ser actualizada con uno o varios _commits_ describiendo el trabajo realizado a lo largo del día, así como el trabajo restante por hacer para completar la actividad relacionada con la rama

Cuando la actividad queda completada se procede a realizar un _pull request_ contra la rama _develop_ para que el _team_lead_ de la plataforma evalúe el estado del código y así poder hacer merge con la rama _develop_. En el caso de ser _swift_ el lenguaje empleado, para que el código se considere apto para un _merge_ debe seguir esta guía de estilos _(https://github.com/raywenderlich/swift-style-guide)_. En caso de ser rechazado el _pull request_ el encargado de la rama deberá modificar el código señalado por el _team_lead_ hasta que este sea apto para mezclar con la rama _develop_



