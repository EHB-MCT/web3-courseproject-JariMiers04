import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('admin')

// { host: 'admin.example.com' }

export class AdminController {

@Get()
// @Redirect('www.google.com', 404)
index():string {
    return "Admin Page"
}
}
