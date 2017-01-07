::PATH
SET RELEASE_DIR=D:\Homepage\samchon.github.io\tstl

::TRUNCATE DREGS
rd %RELEASE_DIR%\api /S /Q
rd %RELEASE_DIR%\..\stl /S /Q

:: ----------------------------------------------------------------
::    TYPE_SCRIPT
:: ----------------------------------------------------------------
SET TS_SRC_DIR=..\ts\src

::DOCUMENTATE
call typedoc --target ES5 --out %RELEASE_DIR%\api %TS_SRC_DIR% --mode file --exclude **/example/*.ts