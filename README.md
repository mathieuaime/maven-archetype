# Maven Archetype
This is a maven archetype to create a basic modular web project with Spring Boot and Vue.js

## Compile the archetype
```
mvn install
```

### Use the archetype
```
mvn archetype:generate \
-DarchetypeGroupId=com.mathieuaime \
-DarchetypeArtifactId=archetype \
-DarchetypeVersion=1.0.0 \
-DgroupId=com.mycoolgroupid \
-DartifactId=my-cool-artifact-id \
-Dversion=1.0.0-SNAPSHOT
```

### Java & Spring Boot version
You can use the following optionals options : 
```
-DjavaVersion=11 -DspringBootVersion=2.4.1
```
