import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCroppperComponent } from './image-croppper/image-croppper.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component'

const routes: Routes = [
  {path: '', component: ImageCroppperComponent},
  {path: 'first-picture', component: PhotoEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ImageCroppperComponent, PhotoEditorComponent]
