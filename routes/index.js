
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'projects': [

      { 'name': 'Verizon MPLS Cloud Products',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'Verizon FiOS CDN',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'HBO Go',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
      { 'name': 'Verizon FiOS Flexview',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': 'project4'
      },
      { 'name': 'BITS Tracker',
        'image': 'lorempixel.abstract.8.jpeg',
        'id': 'project5'
      },
      { 'name': 'Advanced Advertising Platforms',
        'image': 'lorempixel.people.2.jpeg',
        'id': 'project6'
      },
      { 'name': 'Software Defined Networks',
        'image': 'lorempixel.technics.2.jpeg',
        'id': 'project7'
      },
      { 'name': 'This Website',
        'image': 'lorempixel.city.2.jpeg',
        'id': 'project8'
      }
    ]  
  });
}