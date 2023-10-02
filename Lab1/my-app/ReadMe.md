In order To run this lab:

1. Open the Lab1 folder

2. Type this command to start building the Maven project:
> mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false

3. Command to install Maven package:
> mvn package

4. To run App.java:
> mvn exec:java -Dexec.mainClass="com.mycompany.app.App"

5. To run TestMe.java:
> mvn exec:java -Dexec.mainClass="com.mycompany.app.TestMe"
