import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumnos/alumno.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  alumnos: Array<Alumno> = new Array<Alumno>();
  dniIng: number;

  constructor(private alumnoService:AlumnoService,
              private router:Router,
              private loginService:LoginService) { 
                if(this.loginService.userLoggedIn()==true){
                  if(sessionStorage.getItem("perfil")== "entrenador"){

                  }else{
                    alert("No posee los permisos necesarios")
                  this.router.navigate(['home']);
                  }
                }else{
                  alert("Debe Loguearse para continuar")
                  this.router.navigate(['login']);
                }
              }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(){
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAllAlumnos().subscribe(
      result=>{
        result.forEach(element => {
          let vAlumno = new Alumno();
          Object.assign(vAlumno,element);
          this.alumnos.push(vAlumno);
          console.log(result);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar los Alumnos");
      }
    )
  }

  agregarAlumno(){
    this.router.navigate(["alumno-form"]);
  }

  actualizarAlumno(alum:Alumno){
    this.router.navigate(["alumno-detalles/",alum._id]);
  }

  buscarAlumno(){
    console.log(this.dniIng);
    this.alumnos = new Array<Alumno>();
    this.alumnoService.getAlumnoByDNI(this.dniIng).subscribe(
      result=>{
        result.forEach(element => {
          let vAlumno = new Alumno();
          Object.assign(vAlumno,element);
          this.alumnos.push(vAlumno);
          console.log(result);
        });
      },
      error=>{
        console.log(error);
        alert("Error al cargar los Alumnos");
      }
    )
  }
}
