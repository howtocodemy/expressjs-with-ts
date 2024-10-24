import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
// import { User, UserBase } from "./user";
// import { UsersService } from "./usersService";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Route("users")
export class UsersController extends Controller {

    @Get('all')
    public async getAllUsers(): Promise<any[]> {
        const users = await prisma.user.findMany();
        return users;
    }
    @Post()
    public async createUser(
        @Body() requestBody: any
    ): Promise<any> {
        const user = await prisma.user.create({
            data: {
                username: requestBody.username,
            },
        });
        return user;
    }

    // @Get("{userId}")
    // public async getUser(
    //     @Path() userId: number,
    //     @Query() name?: string
    // ): Promise<User> {
    //     return new UsersService().get(userId, name);
    // }

    // @SuccessResponse("201", "Created") // Custom success response
    // @Post()
    // public async createUser(
    //     @Body() requestBody: UserBase
    // ): Promise<void> {
    //     this.setStatus(201); // set return status 201
    //     new UsersService().create(requestBody);
    //     return;
    // }
}
