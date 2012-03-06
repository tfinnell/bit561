<?php

/**********************************************************
 *  Post for this data pipe with:
 *     {
            "pipe" : "users",
 *          "queryType" : "select",
 *          "tableName" : "users",
 *          "project" : "BIT561"
 *      }
 **********************************************************/
class CodeSnippetsDataPipe extends baseDataPipe {

    protected $snippet;

    function __construct($tableMapManager, $dataManager) {
        parent::__construct($tableMapManager, $dataManager);
        $this->snippet = $_REQUEST['code'];       
    }

    function where() {
        return "WHERE code LIKE '".$this->snippet."'";
    }

}

