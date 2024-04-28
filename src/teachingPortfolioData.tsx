import { StudentImages, ThumbnailImages } from './models/images.model';

export const teachingThumbnailImage: ThumbnailImages = {
  imageList: [
    { 
      id: '1', 
      image: '2D_thumbnail', 
      page: '2d.design', 
      function: 'twoDDesign', 
      orientation: 'portrait',
      class: '2D Design' 
    },
    { 
      id: '2', 
      image: '3D_thumbnail', 
      page: '3d.design', 
      function: 'threeDDesign', 
      orientation: 'landscape',
      class: '3D Design' 
    },
    { 
      id: '3', 
      image: 'beginning_metals_thumbnail', 
      page: 'beginning.metals', 
      function: 'BeginningMetals', 
      orientation: 'landscape',
      class: 'Beginning Metals' 
    },
    { 
      id: '4', 
      image: 'advanced_metals_thumbnail', 
      page: 'advanced.metals', 
      function: 'AdvancedMetals', 
      orientation: 'portrait',
      class: 'Advanced Metals' 
    }
  ]
};

export const twoDDesign: StudentImages = {
  class: '2D Design',
  projects: [
    {
      title: 'Line and Composition',
      imageList: [
        {
          id: '1',
          image: 'line_and_composition_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '2',
          image: 'line_and_composition_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '3',
          image: 'line_and_composition_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Shape and Space',
      imageList: [
        {
          id: '11',
          image: 'shape_and_space_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '12',
          image: 'shape_and_space_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Abstract Line and Value',
      imageList: [
        {
          id: '21',
          image: 'abstract_line_and_value_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '22',
          image: 'abstract_line_and_value_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '23',
          image: 'abstract_line_and_value_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Texture Collage',
      imageList: [
        {
          id: '31',
          image: 'texture_collage_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '32',
          image: 'texture_collage_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '33',
          image: 'texture_collage_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Value Self-Portrait',
      imageList: [
        {
          id: '41',
          image: 'value_self-portrait_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '42',
          image: 'value_self-portrait_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '43',
          image: 'value_self-portrait_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '44',
          image: 'value_self-portrait_4',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '45',
          image: 'value_self-portrait_5',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        }
      ]
    },
    {
      title: 'Repeated Object',
      imageList: [
        {
          id: '51',
          image: 'repeated_object_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '52',
          image: 'repeated_object_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '53',
          image: 'repeated_object_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '54',
          image: 'repeated_object_4',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '55',
          image: 'repeated_object_5',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        }
      ],
    }
  ]
};

export const threeDDesign: StudentImages = {
  class: '3D Design',
  projects: [
    {
      title: 'Modeled Object Relief',
      imageList: [
        {
          id: '1',
          image: 'modeled_object_relief_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '2',
          image: 'modeled_object_relief_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '3',
          image: 'modeled_object_relief_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '4',
          image: 'modeled_object_relief_4',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '5',
          image: 'modeled_object_relief_5',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Inflatable Installations',
      imageList: [
        {
          id: '11',
          image: 'inflatable_installation_1',
          institution: 'Lindenwood University',
          year: '2018',
          orientation: 'landscape'
        },
        {
          id: '12',
          image: 'inflatable_installation_2',
          institution: 'Lindenwood University',
          year: '2018',
          orientation: 'landscape'
        },
        {
          id: '13',
          image: 'inflatable_installation_3',
          institution: 'Lindenwood University',
          year: '2018',
          orientation: 'landscape'
        },
        {
          id: '14',
          image: 'inflatable_installation_4',
          institution: 'Lindenwood University',
          year: '2018',
          orientation: 'landscape'
        },
        {
          id: '15',
          image: 'inflatable_installation_5',
          institution: 'Lindenwood University',
          year: '2018',
          orientation: 'landscape'
        },
        {
          id: '16',
          image: 'inflatable_installation_6',
          institution: 'Lindenwood University',
          year: '2018',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Wearable Wire',
      imageList: [
        {
          id: '21',
          image: 'wearable_wire_1',
          institution: 'Lindenwood University',
          year: '2018',
          orientation: 'portrait'
        },
        {
          id: '22',
          image: 'wearable_wire_2',
          institution: 'Lindenwood University',
          year: '2018',
          orientation: 'portrait'
        }
      ]
    },
    {
      title: 'Wire Clothing',
      imageList: [
        {
          id: '31',
          image: 'wire_clothing_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '32',
          image: 'wire_clothing_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '33',
          image: 'wire_clothing_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '34',
          image: 'wire_clothing_4',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '35',
          image: 'wire_clothing_5',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Planar Object',
      imageList: [
        {
          id: '41',
          image: 'planar_object_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '42',
          image: 'planar_object_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '43',
          image: 'planar_object_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '44',
          image: 'planar_object_4',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        }
      ]
    },
    {
      title: 'Figurative Carving',
      imageList: [
        {
          id: '51',
          image: 'figurative_carving_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '52',
          image: 'figurative_carving_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '53',
          image: 'figurative_carving_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        }
      ]
    },
    {
      title: 'Cast Hand Assemblage',
      imageList: [
        {
          id: '61',
          image: 'cast_hand_assemblage_1',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '62',
          image: 'cast_hand_assemblage_2',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        },
        {
          id: '63',
          image: 'cast_hand_assemblage_3',
          institution: 'East Central College',
          year: '2017',
          orientation: 'portrait'
        },
        {
          id: '64',
          image: 'cast_hand_assemblage_4',
          institution: 'East Central College',
          year: '2017',
          orientation: 'landscape'
        }
      ]
    }
  ]
};

export const beginningMetals: StudentImages = {
  class: 'Beginning Metalsmithing',
  projects: [
    {
      title: 'Riveted Toy Project',
      imageList: [
        {
          id: '1',
          image: 'riveting_project_1',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '2',
          image: 'riveting_project_2',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        },
        {
          id: '3',
          image: 'riveting_project_3',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '4',
          image: 'riveting_project_4',
          institution: 'Front Range Community College',
          year: '2016', 
          orientation: 'landscape'
        },
        {
          id: '5',
          image: 'riveting_project_5',
          institution: 'University of Kansas',
          year: '2013',
          orientation: 'landscape'
        },
        {
          id: '6',
          image: 'riveting_project_6',
          institution: 'University of Kansas',
          year: '2014',
          orientation: 'landscape'
        },
        {
          id: '7',
          image: 'riveting_project_7',
          institution: 'University of Kansas',
          year: '2012',
          orientation: 'portrait'
        },
        {
          id: '8',
          image: 'riveting_project_8',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '9',
          image: 'riveting_project_9',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'portrait'
        },
        {
          id: '10',
          image: 'riveting_project_10',
          institution: 'University of Kansas',
          year: '2012',
          orientation: 'landscape'
        },
        {
          id: '11',
          image: 'riveting_project_11',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '12',
          image: 'riveting_project_12',
          institution: 'University of Kansas',
          year: '2012',
          orientation: 'landscape'
        },
        {
          id: '13',
          image: 'riveting_project_13',
          institution: 'University of Kansas',
          year: '2012',
          orientation: 'portrait'
        },
        {
          id: '14',
          image: 'riveting_project_14',
          institution: 'University of Kansas',
          year: '2015',
          orientation: 'landscape'
        },
        {
          id: '15',
          image: 'riveting_project_15',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '16',
          image: 'riveting_project_16',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'portrait'
        },
      ]
    },
    {
      title: 'Ordinary Object Container',
      imageList: [
        {
          id: '21',
          image: 'ordinary_object_container_1',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        },
        {
          id: '22',
          image: 'ordinary_object_container_2',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        },
        {
          id: '23',
          image: 'ordinary_object_container_3',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '24',
          image: 'ordinary_object_container_4',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '25',
          image: 'ordinary_object_container_5',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        },
        {
          id: '26',
          image: 'ordinary_object_container_6',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '27',
          image: 'ordinary_object_container_7',
          institution: 'University of Kansas',
          year: '2012',
          orientation: 'landscape'
        },
        {
          id: '28',
          image: 'ordinary_object_container_8',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '29',
          image: 'ordinary_object_container_9',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '30',
          image: 'ordinary_object_container_10',
          institution: 'University of Kansas',
          year: '2012',
          orientation: 'landscape'
        },
        {
          id: '31',
          image: 'ordinary_object_container_11',
          institution: 'University of Kansas',
          year: '2012',
          orientation: 'landscape'
        },
        {
          id: '32',
          image: 'ordinary_object_container_12',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '33',
          image: 'ordinary_object_container_13',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '34',
          image: 'ordinary_object_container_14',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '35',
          image: 'ordinary_object_container_15',
          institution: 'University of Kansas',
          year: '2011', 
          orientation: 'portrait'
        },
        {
          id: '36',
          image: 'ordinary_object_container_16',
          institution: 'University of Kansas',
          year: '2011',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Sculptural Ring',
      imageList: [
        {
          id: '41',
          image: 'sculptural_ring_1',
          institution: 'Front Range Community College',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '42',
          image: 'sculptural_ring_2',
          institution: 'Front Range Community College',
          year: '2012', 
          orientation: 'landscape'
        },
        {
          id: '43',
          image: 'sculptural_ring_3',
          institution: 'Uninversity of Kansas',
          year: '2014',
          orientation: 'landscape'
        },
        {
          id: '44',
          image: 'sculptural_ring_4',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '45',
          image: 'sculptural_ring_5',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '46',
          image: 'sculptural_ring_6',
          institution: 'Uninversity of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '47',
          image: 'sculptural_ring_7',
          institution: 'Uninversity of Kansas',
          year: '2013',
          orientation: 'landscape'
        },
        {
          id: '48',
          image: 'sculptural_ring_8',
          institution: 'Uninversity of Kansas',
          year: '2012',
          orientation: 'portrait'
        },
        {
          id: '49',
          image: 'sculptural_ring_9',
          institution: 'Uninversity of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '50',
          image: 'sculptural_ring_10',
          institution: 'Uninversity of Kansas',
          year: '2013',
          orientation: 'portrait'
        },
        {
          id: '51',
          image: 'sculptural_ring_11',
          institution: 'Uninversity of Kansas',
          year: '2012',
          orientation: 'landscape'
        },
        {
          id: '52',
          image: 'sculptural_ring_12',
          institution: 'Uninversity of Kansas',
          year: '2011',
          orientation: 'landscape'
        },
        {
          id: '53',
          image: 'sculptural_ring_13',
          institution: 'Uninversity of Kansas',
          year: '2012',
          orientation: 'landscape'
        },
        {
          id: '54',
          image: 'sculptural_ring_14',
          institution: 'Uninversity of Kansas',
          year: '2011',
          orientation: 'landscape'
        }
      ]
    }
  ]
};

export const advancedMetals: StudentImages = {
  class: 'Advanced Metalsmithing',
  projects: [
    {
      title: 'Enameled Chain',
      imageList: [
        {
          id: '1',
          image: 'enameled_chain_1',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '2',
          image: 'enameled_chain_2',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '3',
          image: 'enameled_chain_3',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        }
      ]
    },
    {
      title: 'Cast Coil Pendant',
      imageList: [
        {
          id: '11',
          image: 'coil_pendant_1',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        },
        {
          id: '12',
          image: 'coil_pendant_2',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        },
        {
          id: '13',
          image: 'coil_pendant_3',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'portrait'
        },
        {
          id: '14',
          image: 'coil_pendant_4',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        }
      ]
    },
    {
      title: 'Cast Rings',
      imageList: [
        {
          id: '21',
          image: 'cast_rings_1',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        },
        {
          id: '22',
          image: 'cast_rings_2',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        },
        {
          id: '23',
          image: 'cast_rings_3',
          institution: 'Front Range Community College',
          year: '2016',
          orientation: 'landscape'
        }
      ]
    }
  ]
};

