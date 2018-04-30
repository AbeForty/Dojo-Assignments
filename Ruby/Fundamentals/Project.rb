class Project
    def initialize(name, description) 
        @project_name = name 
        @project_description = description 
        puts "Created project #{@project_name}"
      end
    def name 
      @project_name
    end
    def name= (project_name)
      @project_name = name
    end
    def elevator_pitch
        puts @project_name +  ", " + @project_description
    end
end
  project1 = Project.new("Project 1", "Description 1")
  puts project1.name # => "Project 1"
  project1.elevator_pitch  # => "Project 1, Description 1"