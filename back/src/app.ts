import express from 'express';
import path from "path";
import { createRestApiServer, connectToDBServer } from 'core/servers';
import { envConstants} from "core/constants"
import { housesApi } from "pods/house";

const restApiServer = createRestApiServer();

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
restApiServer.use("/", express.static(staticFilesPath));

restApiServer.use(async (req, res, next) => {
  console.log(req.url);
  next();
});


restApiServer.use("/api/houses", housesApi);


restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    console.log("Connected to DB");
  } else {
    console.log('Running API mock');
  }
  console.log(`Server ready at port 3000 ${envConstants.PORT}`);
});