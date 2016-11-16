// Evaluations:

// POST
// /evaluations 
// 			{
// 			  "__v": 0,
// 			  "dateSaved": "2016-11-16T13:42:40.468Z",
// 			  "createdAt": "2016-11-16T13:42:40.468Z",
// 			  "ninja": {
// 			    "name": "JillCatTest",
// 			    "email": "jillcattest@email.com",
// 			    "_id": "582c6250ace34715fb7b7479"
// 			  },
// 			  "client": {
// 			    "name": "JillCatTest Client",
// 			    "_id": "582c6250ace34715fb7b7478"
// 			  },
// 			  "_id": "582c6250ace34715fb7b7476",
// 			  "answers": [
// 			    {
// 			      "grade": "sad",
// 			      "_id": "582c6250ace34715fb7b7477",
// 			      "question": {
// 			        "type": "JillCatTestType",
// 			        "text": "JillCatTestText"
// 			      }
// 			    }
// 			  ]
// 			}								


// 	<!-- 		{
// 		 	"ninja": {
// 		 		"firstName": "putWorking",
// 		 		"lastName": "fluffyKitty",
// 		 		"email": "putWorking@email.com"
// 		 	},
// 		 	"client": {
// 		 		"name": "companyRandom"
// 		 	},
// 		 	"answers": [{
// 		 		"grade": "sad",
// 		 		"question": {
// 		 			"type": "putWorkingType",
// 		 			"text": "putWorkingText"
// 		 		}
// 		 	}]
// 		 }
//  -->


// GET
// /evaluations 

// 			{
// 		  "evaluationSchema": [
// 		    {
// 		      "_id": "582c43820cfc2d14eaaadc7c",
// 		      "dateSaved": "2016-11-16T11:31:14.076Z",
// 		      "createdAt": "2016-11-16T11:31:14.076Z",
// 		      "ninja": {
// 		        "name": "Jack",
// 		        "email": "jack@email.com",
// 		        "_id": "582c43820cfc2d14eaaadc7f"
// 		      },
// 		      "client": {
// 		        "name": "Jack Client",
// 		        "_id": "582c43820cfc2d14eaaadc7e"
// 		      },
// 		      "__v": 0,
// 		      "answers": [
// 		        {
// 		          "grade": "sad",
// 		          "_id": "582c43820cfc2d14eaaadc7d",
// 		          "question": {
// 		            "type": "JackType",
// 		            "text": "JackText"
// 		          }
// 		        }
// 		      ]
// 		    }
    
// GET
// /evaluations/peer-evaluations

// 			{
// 			  "client": [
// 			    {
// 			      "_id": "582c43840cfc2d14eaaadc80",
// 			      "dateSaved": "2016-11-16T11:31:16.768Z",
// 			      "client": {
// 			        "name": "Rose Client",
// 			        "_id": "582c43840cfc2d14eaaadc82"
// 			      }
// 			    }
// 			  ]
// 			}

// PUT
// /evaluations/:id

// 				{
// 				  "_id": "582c6acc1533b21a4c4941e5",
// 				  "dateSaved": "2016-11-16T14:20:08.767Z",
// 				  "createdAt": "2016-11-16T14:18:52.478Z",
// 				  "ninja": {
// 				    "firstName": "putWorking",
// 				    "lastName": "fluffyKitty",
// 				    "email": "putworking@email.com",
// 				    "_id": "582c6b181533b21a4c4941ed"
// 				  },
// 				  "client": {
// 				    "name": "companyRandom",
// 				    "_id": "582c6b181533b21a4c4941ec"
// 				  },
// 				  "__v": 1,
// 				  "answers": [
// 				    {
// 				      "grade": "sad",
// 				      "_id": "582c6b181533b21a4c4941eb",
// 				      "question": {
// 				        "type": "putWorkingType",
// 				        "text": "putWorkingText"
// 				      }
// 				    }
// 				  ]
// 				}


// DELETE
// /evaluations/:id


// working








